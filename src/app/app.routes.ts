import {Routes} from '@angular/router'
import { CreateTaskComponent } from "./createTask/createTask.component";
import {ReadTaskComponent} from "./readTask/readTask.component";
import {UpdateTaskComponent} from "./update-task/update.component";

export const routes: Routes = [{
  path : 'createTask',
  component: CreateTaskComponent
},{
  path: 'readTask',
  component: ReadTaskComponent
},{
  path: 'updateTask/:id',
  component: UpdateTaskComponent
}];
