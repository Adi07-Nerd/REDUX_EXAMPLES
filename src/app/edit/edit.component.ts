import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bookmark, BookmarkService } from '../shared/service/bookmark/bookmark.service';
import {  Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';
import { Store } from '@ngrx/store';
import { BookmarkState } from '../store/bookmark';
import { getEditBookmark } from '../store/bookmark/bookmark.selector';
import { BookmarkActions } from '../store/bookmark/bookmark.actions';
import { AppState } from '../store/index';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnDestroy{
  public bookmarkForm:FormGroup;
  public bookmarkUpdate$:Subscription;
  
  constructor(private fb:FormBuilder,private bookmarkService:BookmarkService,private router:Router,private dailog:MatDialog,private store$:Store<AppState>){
    this.store$.select(getEditBookmark).subscribe( (bookmark:Bookmark | undefined) => {
      this.bookmarkForm = this.fb.group({
        name:[bookmark?.name,Validators.required],
        url:[bookmark?.url,Validators.required]
      })
    })
  }

  onSubmit(){
    this.store$.select(getEditBookmark).subscribe( (bookmark:Bookmark | undefined) => {
      this.store$.dispatch(BookmarkActions.bookmarkSaveEditBookmark({bookmark:Object.assign({},bookmark,this.bookmarkForm.value)}));
    })
    // this.router.navigate(['/list']);

    // this.store$.select(getEditBookmark).subscribe( (bookmark:Bookmark | undefined) =>{
    //   this.bookmarkUpdate$ = this.bookmarkService.update({
    //     id:bookmark?.id,
    //     ...this.bookmarkForm.value,
    //   }).subscribe(() => { this.router.navigate(['/list'])},
    //    (err) => {
    //     console.log(err)
    //     this.dailog.open(ErrorDialogComponent,{ 
    //     width: '400px',
    //     data: { errorMessage: 'Sorry, unable to update bookmark.'}
    //    })
    //   }
    //   )
    // })
  }

  ngOnDestroy(): void {
    if(this.bookmarkUpdate$){
      this.bookmarkUpdate$.unsubscribe()
    }
  }

}
