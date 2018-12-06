import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../../model'
@Component({
    selector: 'app-projects-list-item',
    template: `
        <figure class="project">
            <img [src]='item.picture' class="project__img">
            <figcaption class="project-details">
                <p class="project-details__category">{{ item.skillCategory }}</p>
                <p class="project-details__title">{{ item.title }}</p>
                <!-- Data na razie taka bo nie wiem jak tu zrobić coś a la computed w vue -->
                <p class="project-details__date">{{ item.createdAt }}</p>
            </figcaption>
        </figure>
    `,
    styleUrls: ['./projects-list-item.component.scss']
})
export class ProjectsListItemComponent implements OnInit {
    @Input() item: Project;
    constructor() { }
    ngOnInit() {
        //console.log(this.item)
    }
}