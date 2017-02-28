
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {RouterOutletMap, Router} from '@angular/router';
import {HttpModule} from "@angular/http";
import {RouterTestingModule} from "@angular/router/testing";
import {Observable} from "rxjs/Observable";
import {AppSingleton} from "../app.singletonService";
import 'rxjs/add/observable/of'
import {ReadTaskComponent} from "./readTask.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

describe('Readtask component', function () {
  let de: DebugElement;
  let comp: ReadTaskComponent;
  let fixture: ComponentFixture<ReadTaskComponent>;
  let service: AppSingleton;
  class MockRouter {
    navigate(){

    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReadTaskComponent],
      providers: [RouterOutletMap, {provide: Router, useClass: MockRouter}, AppSingleton],
      imports: [RouterTestingModule, HttpModule, CommonModule, FormsModule]

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadTaskComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    service = fixture.debugElement.injector.get(AppSingleton)
  });

  it('should be able to get data from service', () => {
    spyOn(service, 'showTask').and.returnValue(
      Observable.of<any>(
        [{
          date: '',
          title: '',
          description: '',
          priority: ''
        }]
      )
    );
    comp.ngOnInit();
    expect(comp.tasks).toEqual([{
      date: '',
      title: '',
      description: '',
      priority: ''
    }])

  });

  it('should be able to delete data from service', () => {
    spyOn(service, 'deleteTask').and.returnValue(
      Observable.of<any>(
        [{
          date: '',
          title: '',
          description: '',
          priority: ''
        }]
      )
    );

    comp.deleteTask('1');
    expect(comp.deletedTask).toEqual([{
      date: '',
      title: '',
      description: '',
      priority: ''
    }])

  });

});
