import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BookmarkService } from '../shared/service/bookmark/bookmark.service';
import { Store } from '@ngrx/store';
import { FILTER_BOOKMARKS } from '../store/toolbar/toolbar.actions';
import { AppState } from '../store/index';

@Component({
  selector: 'app-second-chapter',
  templateUrl: './second-chapter.component.html',
  styleUrls: ['./second-chapter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SecondChapterComponent {
  constructor(public bookmarkService:BookmarkService,public readonly $store:Store<AppState>){ }

  onFilterChange(value:any){
    this.$store.dispatch(FILTER_BOOKMARKS.filterBookmarks({filterText:value}));
  }

}
