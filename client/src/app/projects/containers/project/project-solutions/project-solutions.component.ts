import { Component, OnInit, Input } from '@angular/core';
import { Solution } from 'src/app/model';

@Component({
  selector: 'app-project-solutions',
  templateUrl: './project-solutions.component.html',
  styleUrls: ['./project-solutions.component.scss']
})
export class ProjectSolutionsComponent implements OnInit {
@Input()  solutions! : Solution[];
  constructor() { }

  ngOnInit() {
  }

}
