import { Component, OnInit } from '@angular/core';
import { AppSingleton } from "../app.singletonService";
import {Task} from "../task";
import {FormBuilder} from "@angular/forms";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import {Http} from "@angular/http";

@Component ({
  moduleId: module.id,
  selector: 'create',
  templateUrl: './createTask.component.html',
  styleUrls: ['']
})

export class CreateTaskComponent implements OnInit{

  tasks:Task[];
  task:Task;

  constructor(private service: AppSingleton, private formBuilder: FormBuilder,private http: Http){}
  ngOnInit(){
    this.tasks = this.service.tasks;
  }


  addData(taskDate: string, taskTitle: string, taskDesc: string, taskPriority: string) {

      let addTask = new Task(taskDate, taskTitle, taskDesc, taskPriority)
      this.service.addTask(new Task(addTask.date,addTask.title,addTask.description,addTask.priority))
        .subscribe(data => {
          this.tasks=data;
      }, error => {
        alert(error)
      });
  }
}
