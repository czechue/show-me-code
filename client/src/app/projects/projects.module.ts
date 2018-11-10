import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsListComponent } from './containers/projects-list/projects-list.component';
import { ProjectsService } from './projects.service';
import { ProjectComponent } from './containers/project/project.component';
import { RouterModule, Routes } from '@angular/router';

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
    declarations: [ProjectsListComponent, ProjectComponent],
    exports: [ProjectsListComponent, ProjectComponent]
})
export class ProjectsModule {}
