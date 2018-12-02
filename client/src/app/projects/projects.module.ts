import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsListComponent } from './containers/projects-list/projects-list.component';
import { ProjectsService } from './projects.service';
import { ProjectComponent } from './containers/project/project.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterTabsComponent } from './containers/projects-list/filter-tabs/filter-tabs.component';
import { FilterTabsItemComponent } from './containers/projects-list/filter-tabs/filter-tabs-item/filter-tabs-item.component';
import { ProjectsListItemComponent } from './containers/projects-list/projects-list-item/projects-list-item.component';

export const ROUTES: Routes = [
    {
        path: 'projects',
        component: ProjectsListComponent
    },
    {
        path: 'projects/:projectId',
        component: ProjectComponent
    }
];

@NgModule({
    imports: [CommonModule, HttpClientModule, RouterModule.forChild(ROUTES)],
    providers: [ProjectsService],
    declarations: [ProjectsListComponent, ProjectComponent, FilterTabsComponent, FilterTabsItemComponent, ProjectsListItemComponent],
    exports: [ProjectsListComponent, ProjectComponent]
})
export class ProjectsModule {}
