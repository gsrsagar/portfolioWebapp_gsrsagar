import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes:Routes=[
    {path:'home',component:HomeComponent},
    {path:'',redirectTo:'', pathMatch:'full'}]


   
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
export class HomeRoutingModule{

}