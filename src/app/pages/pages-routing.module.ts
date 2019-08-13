import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'users',
      loadChildren: './users/users.module#UsersModule'
    },
    {
      path: 'tasks',
      loadChildren: './tasks/tasks.module#TasksModule'
    },
    {
      path: '',
      loadChildren: './users/users.module#UsersModule'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
