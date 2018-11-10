import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../../store';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class SongsService {
  getPlaylist$ = this.http.get('/api/playlist').pipe(
    tap(value => this.store.set('playlist', value))
  );

  constructor(private http: HttpClient, private store: Store) {}
}
