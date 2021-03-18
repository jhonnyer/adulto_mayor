import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormAdultoComponent} from './components/form-adulto/form-adulto.component';
import {ListFormComponent} from './components/list-form/list-form.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/form',
    pathMatch:'full'
  },
  {
    path:'form',
    component:ListFormComponent
  },
  {
    path:'form/add',
    component:FormAdultoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
