
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpModule} from "@angular/http";
import {RouterTestingModule} from "@angular/router/testing";
import {Observable} from "rxjs/Observable";
import {AppSingleton} from "../app.singletonService";
import 'rxjs/add/observable/of'
import {UpdateTaskComponent} from "./update.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


describe('UpdateTask component', function () {
  let de: DebugElement;
  let comp: UpdateTaskComponent;
  let fixture: ComponentFixture<UpdateTaskComponent>;
  let service: AppSingleton;
  class MockRouter {
    navigate(){

    }
  }

  class MockActivatedRouter {
    params = Observable.of<any>({'id': 1})
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTaskComponent],
      providers: [{provide: ActivatedRoute, useClass: MockActivatedRouter}, AppSingleton],
      imports: [RouterTestingModule, HttpModule, CommonModule, FormsModule]

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTaskComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    service = fixture.debugElement.injector.get(AppSingleton)
  });

  it('should be able to modify data from service', () => {
    spyOn(service, 'updateTask').and.returnValue(
      Observable.of<any>(
        [{
          _id: '',
          date: '',
          title: '',
          description: '',
          priority: ''
        }]
      )
    );
    comp.addData('','','','');
    expect(comp.tasks).toEqual([{
      _id: '',
      date: '',
      title: '',
      description: '',
      priority: ''
    }])

  });

 });
