import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <div>
        <app-header></app-header>
        <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent  {

}
