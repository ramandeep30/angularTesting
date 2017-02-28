import {Component, OnInit} from '@angular/core';
import {AppSingleton} from "../app.singletonService";
import {Task} from "../task";
import { Router } from '@angular/router';
import {Observable} from "rxjs/Observable"
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import {Http, Headers} from "@angular/http";

@Component ({
  moduleId: module.id,
  selector: 'read',
  templateUrl: './readTask.component.html',
  styleUrls: ['']
})

export class ReadTaskComponent implements OnInit{

  tasks:Task[];
  deletedTask:Task[];

  constructor(private service: AppSingleton, private router: Router, private http:Http){

  }
  ngOnInit(){
    this.service.showTask().subscribe(data => {
      this.tasks =data;
        alert(JSON.stringify(data));
    }, error => {
      alert(error)
    });
  }



  deleteTask(i: string){
    this.service.deleteTask(i).subscribe(data => {
      this.deletedTask=data
      alert(JSON.stringify(data))
    }, error => {
      alert(error)
    });
    this.service.showTask().subscribe(data => {
      this.tasks =data;
      alert(JSON.stringify(data));
    }, error => {
      alert(error)
    });
  }




  redirect(index :string) {
    this.router.navigate(['updateTask',index]);
  }

  extractData(res: any) {
    let body = res.json();
    alert(body);
    return body;
  }

  private handleError(error:any) {
    let errMsg: string;
    try {
      if (JSON.parse(error._body).message) {
        errMsg = JSON.parse(error._body).message;
      }
      else {
        errMsg = 'Something went wrong. Please try again later.';
      }
    }
    catch(e) {
      errMsg = 'Something went wrong. Please try again later.'
    }
    return Observable.throw(new Error(errMsg));
  }


}
