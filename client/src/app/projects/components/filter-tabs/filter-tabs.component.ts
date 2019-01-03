import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-filter-tabs',
    template: `
        <div class="filter-tabs">
            <button *ngFor="let item of items" class="filter-tabs__tab">
                {{ item }}
            </button>
        </div>
    `,
    styleUrls: ['./filter-tabs.component.scss']
})
export class FilterTabsComponent implements OnInit {
    items = ['All', 'Beginner', 'Advanced', 'Professional'];
    constructor() {}
    ngOnInit() {
        // console.log(this.item)
    }
}
