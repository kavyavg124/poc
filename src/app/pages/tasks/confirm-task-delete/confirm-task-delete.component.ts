import { Component, OnInit, Inject } from '@angular/core';
import { VERSION, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-task-delete',
  templateUrl: './confirm-task-delete.component.html',
  styleUrls: ['./confirm-task-delete.component.css']
})
export class ConfirmTaskDeleteComponent implements OnInit {

  message = 'Are you sure?';
  confirmButtonText = 'Yes';
  cancelButtonText = 'Cancel';
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ConfirmTaskDeleteComponent>) {
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
