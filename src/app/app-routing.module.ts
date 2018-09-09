import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';

const routes: Routes = [
  {
    path: 'home',
    component: FullLayoutComponent,
    loadChildren: './views/home/home.module#HomeModule'
  },
  {
    path: '',
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
