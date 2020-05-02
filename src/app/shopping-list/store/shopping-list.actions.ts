import { Action } from "@ngrx/store";
import { ShoppingListItem } from '../shopping-list.module';


export const ADD_ITEM = "ADD_ITEM";

export class AddItem implements Action {
  readonly type = ADD_ITEM;
  constructor(public payload:ShoppingListItem ) {

  }
}




export type ShoppingListActions = AddItem
