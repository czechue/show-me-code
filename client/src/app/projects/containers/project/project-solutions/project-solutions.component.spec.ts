import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSolutionsComponent } from './project-solutions.component';

describe('ProjectSolutionsComponent', () => {
  let component: ProjectSolutionsComponent;
  let fixture: ComponentFixture<ProjectSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
