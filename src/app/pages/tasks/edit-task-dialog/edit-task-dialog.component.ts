import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TasksService, UsersService } from '../../services';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.css']
})
export class EditTaskDialogComponent implements OnInit {
  editTaskForm: FormGroup;
  taskId: number;
  taskDetails: any;
  users: any;
  state: any;
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) { taskId },
    private tasksService: TasksService,
    private userService: UsersService) {
    this.taskId = taskId;
    this.editTaskForm = formBuilder.group({
      id: ['', ''],
      user_id: ['', Validators.required],
      description: ['', Validators.required],
      state: ['', Validators.required]
    });
    this.userService.usersList().subscribe(users => {
      this.users = users;
    });
    this.state = [
      { name: 'to do', value: 1 },
      { name: 'done', value: 2 },
    ];
  }
  ngOnInit() {
    this.tasksService.getTask(this.taskId).subscribe(taskDetails => {
      this.taskDetails = taskDetails;
      this.editTaskForm.setValue({
        id: this.taskDetails.id,
        user_id: this.taskDetails.user_id,
        description: this.taskDetails.description,
        state: this.taskDetails.state
      });
    });

  }
  save() {
    this.tasksService.editTask(this.editTaskForm.value).subscribe(result => {
      this.tasksService.activeTaskData();
      this.dialogRef.close(this.editTaskForm.value);
    });
  }
  close() {
    this.dialogRef.close();
  }
}
