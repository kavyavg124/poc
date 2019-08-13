import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersService } from '../../services';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent implements OnInit {
  editUserForm: FormGroup;
  userId: number;
  userDetails: any;
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) { userId },
    private usersService: UsersService) {
    this.userId = userId;
    this.usersService.getUser(this.userId).subscribe(userDetails => {
      this.userDetails = userDetails;
      this.editUserForm.setValue({
        id: this.userDetails.id,
        first_name: this.userDetails.first_name,
        last_name: this.userDetails.last_name,
        email: this.userDetails.email
      });
    });
    this.editUserForm = formBuilder.group({
      id: ['', ''],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
  ngOnInit() {
  }
  save() {
    this.usersService.editUser(this.editUserForm.value).subscribe(result => {
      this.usersService.activeUserData();
      this.dialogRef.close(this.editUserForm.value);
    });
  }
  close() {
    this.dialogRef.close();
  }
}
