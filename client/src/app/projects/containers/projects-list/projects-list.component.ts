import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '../../../store';
import { Project } from '../../../model';

@Component({
    selector: 'app-projects-list',
    template: `
    <div>
        Project List:
        <ul>
            <li *ngFor="let item of (projects$ | async)">
                {{ item.title }}
                <p>
                    {{ item._id }}
                </p>
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
