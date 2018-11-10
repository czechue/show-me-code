import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '../../../store';
import { SongsService } from '../../services/songs.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-songs-playlist',
  template: `
    <div class="songs">
      Playlist:
      <div *ngFor="let item of (playlist$ | async)">
        {{ item.artist }} {{ item.track }}
      </div>
    </div>
  `,
  styleUrls: ['./songs-playlist.component.scss']
})
export class SongsPlaylistComponent implements OnInit, OnDestroy {
  playlist$?: Observable<any[]>;
  subscription!: Subscription;

  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit() {
    this.playlist$ = this.store.select('playlist');
    this.subscription = this.songsService.getPlaylist$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
