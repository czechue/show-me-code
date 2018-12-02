import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-filter-tabs-item',
    template: `
        <button class="filter-tabs__item">Beginner</button>
    `,
    styleUrls: ['./filter-tabs-item.component.scss']
})
export class FilterTabsItemComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
