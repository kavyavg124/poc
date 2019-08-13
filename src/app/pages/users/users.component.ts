import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddUserDialogComponent, ConfirmUserDeleteComponent, EditUserDialogComponent } from './index';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList: any;
  subscribeUserList: any;
  displayedColumns: string[] = ['name', 'email', 'actions'];
  constructor(
    private usersService: UsersService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.fetchUserList();
    this.usersService.activeUserList.subscribe(result => {
      this.fetchUserList();
      this.usersService.activeUserList.unsubscribe();
    });
  }
  fetchUserList() {
    this.usersService.usersList().subscribe(result => {
      this.userList = result;
    });
  }
  openAddUserDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddUserDialogComponent, dialogConfig);
  }
  deleteUser(userID) {
    const dialogRef = this.dialog.open(ConfirmUserDeleteComponent, {
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
        this.usersService.deleteUser(userID).subscribe(result => {
          this.usersService.usersList().subscribe(userlists => {
            this.userList = userlists;
          });
        });
      }
    });
  }
  editUser(userID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { userId: userID };
    this.dialog.open(EditUserDialogComponent, dialogConfig);
  }
}
