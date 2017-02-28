import { AppComponent } from './app.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {RouterOutletMap} from '@angular/router';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";
import { AppSingleton } from "./app.singletonService";

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: AppSingleton;

  class MockRouter {

  }

  class MockActivateRouter {

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [ RouterOutletMap,AppSingleton ],
      imports: [RouterTestingModule,  HttpModule, FormsModule, CommonModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    service = fixture.debugElement.injector.get(AppSingleton);
  });

  it('should create component', () => expect(comp).toBeDefined() );

});
