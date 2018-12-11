import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <div>
        <app-header></app-header>
        <router-outlet></router-outlet>
        <app-header></app-header>
    </div>
  `
})
export class AppComponent  {

}
