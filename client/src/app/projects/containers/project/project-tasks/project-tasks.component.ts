import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/model';

@Component({
  selector: 'app-project-tasks',
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.scss']
})
export class ProjectTasksComponent implements OnInit {
  //FIXME zmienic typ any, ale na jaki
@Input()  tasks!: Task[];

  constructor() { }

  ngOnInit() {
  }

}
