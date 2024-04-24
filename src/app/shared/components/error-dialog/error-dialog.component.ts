import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface Error{
  errorMessage:string,
  redirectTo:String
}

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent{
  constructor(public dialogRef:MatDialogRef<ErrorDialogComponent>,@Inject(MAT_DIALOG_DATA) public error:Error,private router:Router){ }

  okClick($event:any){
    if(this.error.redirectTo){
      this.router.navigate([this.error.redirectTo])
    }
    this.dialogRef.close()
  }

}
