import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { AddTaskDialogComponent, EditTaskDialogComponent, ConfirmTaskDeleteComponent } from '../tasks';
import { MatTableModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    TasksComponent,
    AddTaskDialogComponent,
    ConfirmTaskDeleteComponent,
    EditTaskDialogComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    AngularFontAwesomeModule,
    SharedModule
  ],
  entryComponents: [
    AddTaskDialogComponent,
    EditTaskDialogComponent,
    ConfirmTaskDeleteComponent
  ]
})
export class TasksModule { }
