import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  },
  {
    path: 'landing',
    loadChildren: './pages/pages.module#PagesModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'landing'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
