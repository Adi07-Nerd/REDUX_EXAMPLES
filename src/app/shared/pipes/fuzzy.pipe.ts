import { Pipe, PipeTransform } from '@angular/core';
import { Bookmark } from '../service/bookmark/bookmark.service';
import { initialAllBookmarkState } from 'src/app/store/bookmark/bookmark.reducer';

@Pipe({
  name: 'fuzzy'
})
export class FuzzyPipe implements PipeTransform {

  /**
   * 
   * @param bookmarks Array of bookmarks
   * @param args array of argument in which 1st will be string to which has to be filer out
   * @returns filter out Bookmark Array
   */
  transform(bookmarks: Bookmark[] | undefined | null, ...args: string[]):Bookmark[] | undefined | null {
    const filterTerm:string[] = args.map( e => e.toLowerCase()); 

    return ( filterTerm && bookmarks !=  undefined ? 
      ( bookmarks.filter((b:Bookmark) => b.name.toLocaleLowerCase().match(new RegExp(filterTerm.toString(),'gi')) != null)) 
      : bookmarks);
  }

}
