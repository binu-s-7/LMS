import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayItemsComponent } from './display-items/display-items.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'app', component: DisplayItemsComponent },
];

// const routes: Routes = [
//   {component:LoginComponent,path:'login'},
//   {component:RegisterComponent,path:'register'},
//   {component:HomeComponent,path:'',canActivate:[AuthGuard]},
//   {component:UserComponent,path:'user',canActivate:[AuthGuard]},
//   {component:CustomerComponent,path:'customer',canActivate:[AuthGuard]},
//  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
