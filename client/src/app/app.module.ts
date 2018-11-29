import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Store } from './store';

import { AppComponent } from './app.component';
import { ProjectsModule } from './projects/projects.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';

// routes
export const ROUTES: Routes = [
    {
        path: 'projects',
        pathMatch: 'full',
        loadChildren: './projects/projects.module#ProjectsModule'
    },
    { path: '', pathMatch: 'full', redirectTo: '/projects' }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        ProjectsModule,
        HttpClientModule
    ],
    providers: [Store],
    declarations: [AppComponent, HeaderComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
