import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BookmarkService } from '../shared/service/bookmark/bookmark.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit,OnDestroy{
  bookmarkForm:FormGroup;
  bookmarkCreate$:Subscription

  constructor(private fb:FormBuilder,private bookmarkService:BookmarkService,private router:Router,private dialog:MatDialog){
    this.bookmarkForm = this.fb.group({
      name:['',Validators.required],
      url:['',Validators.required]
    });

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.bookmarkCreate$?.unsubscribe()
  }

  onSubmit(){
    this.bookmarkCreate$ = this.bookmarkService.save({...this.bookmarkForm.value,created:moment().toDate}).subscribe((res) => {
      this.router.navigate(['/list']);
    },(err) => {
      console.log(err);
      this.dialog.open(ErrorDialogComponent,{ width:'400px',data:{ errorMessage :'Sorry Unable to Create bookmark.'}})
    })
  }

}
