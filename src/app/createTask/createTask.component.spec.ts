
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {Router} from '@angular/router';
import {HttpModule} from "@angular/http";
import {RouterTestingModule} from "@angular/router/testing";
import {Observable} from "rxjs/Observable";
import {AppSingleton} from "../app.singletonService";
import 'rxjs/add/observable/of'
import {CreateTaskComponent} from "./createTask.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


describe('CreateTask component', function () {
  let de: DebugElement;
  let comp: CreateTaskComponent;
  let fixture: ComponentFixture<CreateTaskComponent>;
  let service: AppSingleton;
  class MockRouter {
    navigate(){

    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTaskComponent],
      providers: [{provide: Router, useClass: MockRouter}, AppSingleton],
      imports: [RouterTestingModule, HttpModule, CommonModule, FormsModule, ReactiveFormsModule]

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    service = fixture.debugElement.injector.get(AppSingleton)
  });

  it('should be able to modify data from service', () => {
    spyOn(service, 'addTask').and.returnValue(
      Observable.of<any>(
        [{
          date: '',
          title: '',
          description: '',
          priority: ''
        }]
      )
    );

    comp.addData('','','','');
    expect(comp.tasks).toEqual([{
      date: '',
      title: '',
      description: '',
      priority: ''
    }])

  });

});
