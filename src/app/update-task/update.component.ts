import {Component, OnInit} from '@angular/core';
import {AppSingleton} from "../app.singletonService";
import {Task} from "../task";
import {ActivatedRoute} from "@angular/router";

@Component ({
  moduleId: module.id,
  selector: 'updateTask',
  templateUrl: './update.component.html',
  styleUrls: ['']
})

export class UpdateTaskComponent implements OnInit{

  tasks: Task[] = [];
  index: string;
  task: Task = new Task('','','','')

  constructor(private service: AppSingleton, private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe((data: any) => {
      this.index = data.id;
      this.service.showTask().subscribe(data => {
        this.tasks = data;
        this.task = this.tasks.filter(x => x._id == this.index)[0];
        console.log("data received:" + JSON.stringify(this.task));
      }, error => {
        alert(error)
      });
    });
  }

  addData(taskDate: string, taskTitle: string, taskDesc: string, taskPriority: string) {
      this.service.updateTask(this.task,this.index)
        .subscribe(data => {
          this.tasks =data;
           }, error => {
          alert(error)
        });
    }

}
