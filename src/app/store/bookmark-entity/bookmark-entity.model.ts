import { Dictionary } from "@ngrx/entity";
import { Bookmark } from "../../shared/service/bookmark/bookmark.service";

/**
 * ids : Array in which data is added 
 * entites: { id: { bookmarkObject }} key will have id of bookmark and bookmark will be saved there
 */
export interface BookmarkEntity {
  ids: Array<number>;
  entities: Dictionary<Bookmark>
}