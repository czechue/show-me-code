import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsListComponent } from './containers/projects-list/projects-list.component';
import { ProjectsService } from './projects.service';
import { ProjectComponent } from './containers/project/project.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListItemComponent } from './components/projects-list-item/projects-list-item.component';

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
    declarations: [ProjectsListComponent, ProjectComponent, ProjectsListItemComponent],
    exports: [ProjectsListComponent, ProjectComponent]
})
export class ProjectsModule {}
