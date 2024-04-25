import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../shared/service/bookmark/bookmark.service';
import { isToday, isYesterday } from '../shared/util.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  allBookmarks: any;
  bookmarkService: any;
  todaysBookmarks: any;
  yesterdaysBookmarks: any;
  olderBookmarks: any;

  ngOnInit() {
    this.allBookmarks = this.bookmarkService.allBookmarks;
    this.todaysBookmarks = this.allBookmarks.filter((bookmark:Bookmark) => isToday(bookmark.created));
    this.yesterdaysBookmarks = this.allBookmarks.filter((bookmark:Bookmark) => isYesterday(bookmark.created));
    this.olderBookmarks = this.allBookmarks.filter((bookmark:Bookmark) => {
      return !this.todaysBookmarks.find((b:Bookmark) => b.id === bookmark.id) &&
             !this.yesterdaysBookmarks.find((b:Bookmark) => b.id === bookmark.id);
    });
  }
}
