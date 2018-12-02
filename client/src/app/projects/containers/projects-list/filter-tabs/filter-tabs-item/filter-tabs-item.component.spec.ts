import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTabsItemComponent } from './filter-tabs-item.component';

describe('FilterTabsItemComponent', () => {
  let component: FilterTabsItemComponent;
  let fixture: ComponentFixture<FilterTabsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterTabsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTabsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
