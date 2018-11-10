import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged, pluck } from "rxjs/operators";

import { State } from "../model";

const state: State = {
  projects: []
};

export class Store {
  // BehaviorSubject allow us to create an initial state
  // it holds the data
  // wll also pass the last value to any new subscribers to the Store
  // the way to update it is .next()

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  set(name: string, state: any) {
    // next is the way to pass the value to the observable
    this.subject.next({
      ...this.value,
      [name]: state
    });
  }
}
