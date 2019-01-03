import { Response } from 'supertest';
import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../../model';
import { isNgTemplate } from '@angular/compiler';
@Component({
    selector: 'app-projects-list-item',
    template: `
        <div class="project">
            <img [src]="item.picture" class="project__img" />
            <figcaption class="project-details">
                <p class="project-details__title">{{ item.title }}</p>
                <p class="project-details__category">
                    {{ item.skillCategory }}
                </p>
                <button class="project-details__button">Details</button>
                <p class="project-details__date">{{ dateConverter() }}</p>
            </figcaption>
        </div>
    `,
    styleUrls: ['./projects-list-item.component.scss']
})
export class ProjectsListItemComponent implements OnInit {
    @Input() item!: Project;

    constructor() {}

    ngOnInit() {}

    dateConverter() {
        const dateRegexp = /T.{0,}/;
        return this.item.createdAt === undefined
            ? 'error'
            : this.item.createdAt.replace(dateRegexp, '');
    }
}
