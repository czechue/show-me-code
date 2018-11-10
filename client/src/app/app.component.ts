import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <div>
      This app works
        <!--<app-projects-list></app-projects-list>-->
        <!--<app-project></app-project>-->
        <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent  {

}
