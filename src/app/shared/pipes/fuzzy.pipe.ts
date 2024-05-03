import { Pipe, PipeTransform } from '@angular/core';
import { Bookmark } from '../service/bookmark/bookmark.service';

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
  transform(bookmarks: Bookmark[], ...args: string[]):Bookmark[] {
    const filterTerm:string[] = args.map( e => e.toLowerCase()); 
    return ( filterTerm ? 
      ( bookmarks.filter((b:Bookmark) => !!filterTerm.includes(b.name.toLocaleLowerCase()))) 
      : bookmarks);
  }

}
