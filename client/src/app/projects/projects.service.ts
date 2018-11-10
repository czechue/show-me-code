import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../model';
import { catchError, map, tap } from 'rxjs/operators';
import { Store } from '../store';

@Injectable()
export class ProjectsService {
    getProjects$: Observable<any> = this.http
        .get('/api/projects')
        .pipe(tap(data => this.store.set('projects', data)));

    constructor(private http: HttpClient, private store: Store) {}
}
