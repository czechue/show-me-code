import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Project } from '../../../model';
import { ProjectsService } from '../../projects.service';
import { Store } from '../../../store';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
    project$?: Observable<Project>;
    sub!: Subscription;

    constructor(
        private projectsService: ProjectsService,
        private store: Store
    ) {}

    ngOnInit() {
        // to refactor -> ten idik bedzie odczytywany z query paramsow
        this.project$ = this.store.select('projects').pipe(
            filter(Boolean),
            map(
                projects =>
                    projects.filter(
                        (project: Project) =>
                            project._id === '5bb91abcd6d2537e42d2533e'
                    )[0]
            )
        );
        this.sub = this.projectsService.getProjects$.subscribe();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
