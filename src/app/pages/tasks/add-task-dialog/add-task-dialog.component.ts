import { Component, OnInit } from '@angular/core';
import { TasksService, UsersService } from '../../services';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.css']
})
export class AddTaskDialogComponent implements OnInit {

  addTaskForm: FormGroup;
  users: any;
  state: any;
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddTaskDialogComponent>,
    private taskService: TasksService,
    private userService: UsersService) {

    this.addTaskForm = formBuilder.group({
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
  }
  save() {
    this.taskService.addTask(this.addTaskForm.value).subscribe(result => {
      this.taskService.activeTaskData();
      this.dialogRef.close(this.addTaskForm.value);
    });
  }
  close() {
    this.dialogRef.close();
  }

}
