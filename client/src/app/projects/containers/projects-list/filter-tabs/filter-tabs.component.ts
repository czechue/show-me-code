import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-filter-tabs',
    template: `
        <div class="filter-tabs">
            <app-filter-tabs-item></app-filter-tabs-item>
            <app-filter-tabs-item></app-filter-tabs-item>
            <app-filter-tabs-item></app-filter-tabs-item>
            <app-filter-tabs-item></app-filter-tabs-item>
        </div>
    `,
    styleUrls: ['./filter-tabs.component.scss']
})
export class FilterTabsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
