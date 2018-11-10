import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div>
      <app-songs-playlist></app-songs-playlist>
      <app-songs-listened></app-songs-listened>
      <app-songs-favourites></app-songs-favourites>
    </div>
  `
})
export class AppComponent {

}
