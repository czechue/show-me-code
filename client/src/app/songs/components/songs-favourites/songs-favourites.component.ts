import { Component, OnInit } from '@angular/core';
import { Store } from '../../../store/index';
import { Observable } from 'rxjs';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-songs-favourites',
  template: `
    <div class="songs">
      Favourites:
      <div *ngFor="let item of (favourites$ | async)">
        {{ item.artist }} {{ item.track }}
      </div>
    </div>
  `,
  styleUrls: ['./songs-favourites.component.scss']
})
export class SongsFavouritesComponent implements OnInit {
  favourites$?: Observable<any[]>;
  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit() {
    this.favourites$ = this.store.select('playlist');
    // if dont want to use async pipe, you can
    // this.favourites$ = this.store.select('playlist').subscribe()
  }
}
