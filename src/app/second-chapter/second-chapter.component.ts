import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BookmarkService } from '../shared/service/bookmark/bookmark.service';
import { Store } from '@ngrx/store';
import { FILTER_BOOKMARKS } from '../store/toolbar/toolbar.actions';
import { AppState } from '../store/index';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { LoaderState } from '../store/router/router.reducer';
import { isPageLoading } from '../store/router/router.selector';

@Component({
  selector: 'app-second-chapter',
  templateUrl: './second-chapter.component.html',
  styleUrls: ['./second-chapter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SecondChapterComponent implements OnDestroy,OnInit{
  public input:FormControl;
  private unsub$:Subscription;
  isPageLoading$:Observable<boolean>;
  constructor(private fb:FormBuilder,public bookmarkService:BookmarkService,public readonly $store:Store<AppState>){
    this.input = this.fb.control('');
   }
  ngOnInit(): void {
    this.isPageLoading$ = this.$store.select(isPageLoading);
    this.unsub$ = this.input.valueChanges.pipe(debounceTime(500),distinctUntilChanged((a,b) => JSON.stringify(a) === JSON.stringify(b))).subscribe( value => this.onFilterChange(value))
  }

  ngOnDestroy(): void {
    this.unsub$.unsubscribe();
  }



  onFilterChange(value:string){
    this.$store.dispatch(FILTER_BOOKMARKS.filterBookmarks({filterText:value}));
  }

}
