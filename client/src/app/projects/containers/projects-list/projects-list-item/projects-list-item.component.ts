import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-projects-list-item',
    template: `
        <div class="project">
            <div class="project__img"></div>
            <div class="project-details">
                <p class="project-details__cat">Beginner</p>
                <p class="project-details__title">Project name</p>
                <p class="project-details__title"></p>
                <p class="project-details__date">02-12-2018</p>
            </div>
        </div>
    `,
    styleUrls: ['./projects-list-item.component.scss']
})
export class ProjectsListItemComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
