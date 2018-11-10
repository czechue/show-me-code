#### Show-me-code Documentation

#### Why Angular?

- Well defined best practices
- Streamlined development workflow
- Rich ecosystem
- Standards gives us twice the power with half the framework
- Reactive
- Typescript

##### @NgModule

- Provides organization at a **framework** level
- **declarations** define view classes that are avaible to the module
- **imports** define a list of modules that the module needs
- **providers** define a list of services the module makes avaible
- **bootstrap** defines the component that should be bootstraped

```javascript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

##### Bootstraping

```javascript
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

##### Routing

- Routes are defined in a route definition table that in its simplest form contains a path and component reference
- Components are loaded into the **router-outlet** component
- We can navigate to routes using the **routerLink** direvtive
- The router uses **history.pushState** which means we need to set a base-ref tag to our index.html file

##### Component Classes

- Component are just ES6 classes
- Properties and methods of the component class are available to the template
- Providers (Services) are injected in the constructor
- The component lifecycle is exposed with **hooks**

```typescript
export class ItemsComponent implements OnInit {
  items: Array<Item>;
  selected: Item;

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.itemsService.loadItems()
      .then(items => this.items = items);
  }
}
```

##### Templates

- A template is HTML that tells Angular how to render a component
- Templates include data bindings as well as other components and directives
- Angular leverages native DOM events and properties which dramatically reduces the need 
for ton of built-in directives
- Angular leverages shadow DOM to do some things with view encapsulation


##### Metadata

- Metadata allows Angular to process a class
- We can attach metadata with TS using decorators
- Decorators are just functions
- Most common is the **@Component()** decorator
- Takes a config option with the: **selector, templateUrl, styles, styleUrls, animations**

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
}
```

##### Data Binding

```typescript

{{value}}
[property]="value"      // from class to template (property binding)
(event)="handler"       // from template to class (event binding)
[(ngModel)]="property"  // two-way binding

```

##### Directives

- A directive is a class decorated with @Directive
- A component is just a directive with added template features
- Built-in directives include structural durectives and attributes directives

```typescript
import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: 'blink'})
export class Blinker {
  constructor(element: ElementRef) {
    // all magic here
  }
}
```

##### Services

- A service is generally just a class
- Should only do one specific thing
- Take the burden of buisness logic out of components
- It is considered best practice to always use **@Injectable** so that metadata is generated correctly

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ProjectsService {
    constructor(private http: HttpClient) {}

    getProjects(): Observable<any> {
        return this.http.get<any>('/api/projects').pipe(
            tap(data => console.log(data)),
            catchError((error: any) => Observable.throw(error.json()))
        );
    }
}
```

#### Typescript & Angular

