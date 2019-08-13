import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersService } from '../../services';
@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit {
  addUserform: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddUserDialogComponent>,
    private userService: UsersService) {

    this.addUserform = formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
  ngOnInit() {
  }
  save() {
    this.userService.addUser(this.addUserform.value).subscribe(result => {
      this.userService.activeUserData();
      this.dialogRef.close(this.addUserform.value);
    });
  }
  close() {
    this.dialogRef.close();
  }
}
