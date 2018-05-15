import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {Routes, RouterModule} from "@angular/router";
import {DogRegisterComponent} from "./dog-register/dog-register.component";

const routes: Routes =[
    { path: 'dashboard',      component: DogRegisterComponent },
    { path: 'user',           component: DogRegisterComponent },
    { path: 'table',          component: DogRegisterComponent },
    { path: 'typography',     component: DogRegisterComponent },
    { path: 'icons',          component: DogRegisterComponent },
    { path: 'maps',           component: DogRegisterComponent },
    { path: 'notifications',  component: DogRegisterComponent },
    { path: 'upgrade',        component: DogRegisterComponent },
      { path: '',          redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
