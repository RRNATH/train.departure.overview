import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  dialogTitle: string;
  dialogMessage: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public  data : any,
    private  dialogRef: MatDialogRef<ErrorMessageComponent>,
  ) {
    this.dialogTitle = this.data.title;
    this.dialogMessage = this.data.message;
  }

  ngOnInit(): void {
  }

}

