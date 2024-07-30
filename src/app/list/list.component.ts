import { Component, OnInit } from '@angular/core';
import { Bookmark, BookmarkService } from '../shared/service/bookmark/bookmark.service';
import { isToday, isYesterday } from '../shared/util.service';
import { Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { getFilterText } from '../store/toolbar/toolbar.selectors';
import { AppState } from '../store/index';
import { getAllBookmarks } from '../store/bookmark/bookmark.selector';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  public allBookmarks: Bookmark[];
  public todaysBookmarks: any;
  public yesterdaysBookmarks: any;
  public olderBookmarks: any;
  public allBookmarks$: Observable<Bookmark[] | undefined>;
  public todaysBookmarks$: Observable<Bookmark[] | undefined>;
  public yesterdaysBookmarks$: Observable<Bookmark[] | undefined>;
  public olderBookmarks$: Observable<Bookmark[] | undefined>;
  public filterText$:Observable<string>;
  constructor(public readonly bookmarkService: BookmarkService,public readonly store$:Store<AppState>){ 
    //After usign store
    this.allBookmarks$ = this.store$.select(getAllBookmarks);
    this.todaysBookmarks$ = this.allBookmarks$.pipe(map((bookmarks:Bookmark[] | undefined) => bookmarks?.filter((bookmark:Bookmark) => isToday(bookmark.created))));
    this.yesterdaysBookmarks$ = this.allBookmarks$.pipe(map((bookmarks:Bookmark[] | undefined) => bookmarks?.filter((bookmark:Bookmark) => isYesterday(bookmark.created))));
    this.olderBookmarks$ = this.allBookmarks$.pipe(map((bookmarks:Bookmark[] | undefined) => bookmarks?.filter((bookmark:Bookmark) => !isToday(bookmark.created) && !isYesterday(bookmark.created))));
    this.filterText$ = this.store$.select(getFilterText);
  }

  ngOnInit() {
    //Before using store
    // this.allBookmarks = <Bookmark[]>this.bookmarkService.allBookmarks;
    // this.todaysBookmarks = this.allBookmarks.filter((bookmark:Bookmark) => isToday(bookmark.created));
    // this.yesterdaysBookmarks = this.allBookmarks.filter((bookmark:Bookmark) => isYesterday(bookmark.created));
    // this.olderBookmarks = this.allBookmarks.filter((bookmark:Bookmark) => {
    //   return !this.todaysBookmarks.find((b:Bookmark) => b.id === bookmark.id) &&
    //          !this.yesterdaysBookmarks.find((b:Bookmark) => b.id === bookmark.id);
    // });
  }
}
