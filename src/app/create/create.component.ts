import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BookmarkService } from '../shared/service/bookmark/bookmark.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';
import { Store } from '@ngrx/store';
import { BookmarkActions } from '../store/bookmark/bookmark.actions'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit,OnDestroy{
  bookmarkForm:FormGroup;
  bookmarkCreate$:Subscription

  constructor(private fb:FormBuilder,private bookmarkService:BookmarkService,private router:Router,private dialog:MatDialog,private store$:Store){
    this.bookmarkForm = this.fb.group({
      name:['',Validators.required],
      url:['',Validators.required]
    });

  }

  get name(){
    return this.bookmarkForm.get('name')
  }

  get url(){
    return this.bookmarkForm.get('url')
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.bookmarkCreate$?.unsubscribe()
  }

  onSubmit(){
    this.store$.dispatch(BookmarkActions.bookmarkSaveBookmark({bookmark: {...this.bookmarkForm.value,created: moment().toDate()}}))
    /**
     * 
    this.bookmarkCreate$ = this.bookmarkService.save({...this.bookmarkForm.value,created:moment().toDate}).subscribe((res) => {
      this.bookmarkService.allBookmarks?.push(res)
      this.router.navigate(['/list']);
    },(err) => {
      console.log(err);
      this.dialog.open(ErrorDialogComponent,{ width:'400px',data:{ errorMessage :'Sorry Unable to Create bookmark.'}})
    })
     */
  }

}
