import { Component, OnInit, Inject } from '@angular/core';
import { VERSION, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-user-delete',
  templateUrl: './confirm-user-delete.component.html',
  styleUrls: ['./confirm-user-delete.component.css']
})
export class ConfirmUserDeleteComponent implements OnInit {

  message = 'Are you sure?';
  confirmButtonText = 'Yes';
  cancelButtonText = 'Cancel';
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ConfirmUserDeleteComponent>) {
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
  }

  ngOnInit() {
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
