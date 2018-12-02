import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTabsComponent } from './filter-tabs.component';

describe('FilterTabsComponent', () => {
  let component: FilterTabsComponent;
  let fixture: ComponentFixture<FilterTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
