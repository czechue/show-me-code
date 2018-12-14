import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '../../../store';
import { Project } from '../../../model';

@Component({
    selector: 'app-projects-list',
    template: `
        <div class="projects-list-container">
        <app-filter-tabs></app-filter-tabs>
            <ul class="container">
                <li *ngFor="let item of (projects$ | async)">
                    <app-projects-list-item
                        [item]="item"
                    ></app-projects-list-item>
                </li>
            </ul>
        </div>
    `,
    styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
    projects$?: Observable<Project[]>;
    sub!: Subscription;

    constructor(
        private projectsService: ProjectsService,
        private store: Store
    ) {}

    ngOnInit() {
        this.projects$ = this.store.select('projects');
        this.sub = this.projectsService.getProjects$.subscribe();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
