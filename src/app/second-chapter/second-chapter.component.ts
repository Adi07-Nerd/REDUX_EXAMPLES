import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BookmarkService } from '../shared/service/bookmark/bookmark.service';

@Component({
  selector: 'app-second-chapter',
  templateUrl: './second-chapter.component.html',
  styleUrls: ['./second-chapter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SecondChapterComponent {
  constructor(public bookmarkService:BookmarkService){ }

}
