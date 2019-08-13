import { Component, OnInit } from '@angular/core';
import { TasksService, UsersService } from '../services';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddTaskDialogComponent, ConfirmTaskDeleteComponent, EditTaskDialogComponent } from '../tasks';
import { isNgTemplate } from '@angular/compiler';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  displayedColumns: string[] = ['user', 'description', 'state', 'action'];
  taskList = [];
  taskListArr = [];
  users: any;
  selectedItem: string;
  filterTask: FormGroup;
  isLoading = false;
  constructor(
    private tasksService: TasksService,
    private dialog: MatDialog,
    private userService: UsersService,
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit() {
    this.isLoading = true;
    this.tasksService.tasksList().subscribe(data => {
      this.parseTaskList(data);
    });
    this.filterTask = this.formBuilder.group({
      user_id: ['', ''],
    });
    this.userService.usersList().subscribe(users => {
      this.users = users;
    });
  }
  parseTaskList(data) {
    let taskLists: any;
    const taskListArr = [];
    taskLists = data;
    taskLists.map((item, index) => {
      item.user.map((userItem, userIndex) => {
        const taskObj = {
          id: userItem.id, userName: item.first_name,
          description: userItem.description, state: ''
        };
        taskObj.state = userItem.state;
        if (userItem.state === 1) {
          taskObj.state = 'to do';
        } else {
          taskObj.state = 'done';
        }
        taskListArr.push(taskObj);
      });
    });
    this.taskList = taskListArr;
    this.isLoading = false;
  }
  openAddTaskDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddTaskDialogComponent, dialogConfig);
  }
  deleteTask(taskID) {
    const dialogRef = this.dialog.open(ConfirmTaskDeleteComponent, {
      data: {
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.tasksService.deleteTask(taskID).subscribe(result => {
          this.tasksService.tasksList().subscribe(taskData => {
            this.taskList = [taskData];
          });
        });
      }
    });
  }
  editTask(taskID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { taskId: taskID };
    this.dialog.open(EditTaskDialogComponent, dialogConfig);
  }
  onSubmit() {
    this.isLoading = true;
    this.taskList = [];
    this.tasksService.taskFilter(this.filterTask.value.user_id).subscribe(result => {
      this.parseTaskList(result);
    });
  }
}
