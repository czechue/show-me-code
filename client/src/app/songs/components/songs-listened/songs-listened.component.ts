import { Component, OnInit } from '@angular/core';
import { Store } from '../../../store';
import { SongsService } from '../../services/songs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-songs-listened',
  template: `
    <div class="songs">
      Listened:
      <div *ngFor="let item of (listened$ | async)">
        {{ item.artist }} {{ item.track }}
      </div>
    </div>
  `,
  styleUrls: ['./songs-listened.component.scss']
})
export class SongsListenedComponent implements OnInit {
  listened$?: Observable<any[]>;

  constructor(private store: Store, private songsService: SongsService) {}

  // dont need to subscribe - bc songsPlaylist component did it already
  ngOnInit() {
    this.listened$ = this.store.select('playlist');
  }
}
