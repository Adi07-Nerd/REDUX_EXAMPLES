import { Component, OnInit } from '@angular/core';
import { Bookmark, BookmarkService } from '../shared/service/bookmark/bookmark.service';
import { isToday, isYesterday } from '../shared/util.service';
import { FuzzyPipe } from '../shared/pipes/fuzzy.pipe';

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
  constructor(public readonly bookmarkService: BookmarkService){ }

  ngOnInit() {
    this.allBookmarks = <Bookmark[]>this.bookmarkService.allBookmarks;
    this.todaysBookmarks = this.allBookmarks.filter((bookmark:Bookmark) => isToday(bookmark.created));
    this.yesterdaysBookmarks = this.allBookmarks.filter((bookmark:Bookmark) => isYesterday(bookmark.created));
    this.olderBookmarks = this.allBookmarks.filter((bookmark:Bookmark) => {
      return !this.todaysBookmarks.find((b:Bookmark) => b.id === bookmark.id) &&
             !this.yesterdaysBookmarks.find((b:Bookmark) => b.id === bookmark.id);
    });
  }
}
