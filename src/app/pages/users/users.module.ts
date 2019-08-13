import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserDialogComponent, EditUserDialogComponent, ConfirmUserDeleteComponent } from '../users';
import { MatTableModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UsersService } from '../services';
@NgModule({
  declarations: [
    UsersComponent,
    AddUserDialogComponent,
    ConfirmUserDeleteComponent,
    EditUserDialogComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    AngularFontAwesomeModule
  ],
  entryComponents: [
    AddUserDialogComponent,
    EditUserDialogComponent,
    ConfirmUserDeleteComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
