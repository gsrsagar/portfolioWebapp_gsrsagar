import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../_shared/helpers/auth-guard.service';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


const routes:Routes=[
   {path:'login',component:LoginComponent},
   {path:'resetpassword',component:ResetpasswordComponent}
   
]




@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AuthenticationRoutingModule{

}