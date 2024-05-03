import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookmarkService } from '../shared/service/bookmark/bookmark.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnDestroy{
  public bookmarkForm:FormGroup;
  public bookmarkUpdate$:Subscription;

  constructor(private fb:FormBuilder,private bookmarkService:BookmarkService,private router:Router,private dailog:MatDialog){
    this.bookmarkForm = this.fb.group({
      name:[this.bookmarkService.editBookmark?.name,Validators.required],
      url:[this.bookmarkService.editBookmark?.url,Validators.required]
    })
  }

  onSubmit(){
    this.bookmarkUpdate$ = this.bookmarkService.update({
      id:this.bookmarkService.editBookmark?.id,
      ...this.bookmarkForm.value,
    }).subscribe(() => { this.router.navigate(['/list'])},
     () => this.dailog.open(ErrorDialogComponent,{ 
      width: '400px',
      data: { errorMessage: 'Sorry, unable to update bookmark.'}
     })
    )
  }

  ngOnDestroy(): void {
    if(this.bookmarkUpdate$){
      this.bookmarkUpdate$.unsubscribe()
    }
  }

}
