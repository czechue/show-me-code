import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { Store } from "./store";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProjectsModule } from "./projects/projects.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ProjectsModule],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {}
