

import * as fromShoppingListReducer from '../shopping-list/store/shopping-list.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  shoppingList:fromShoppingListReducer.AppState
}


export const appReducerState:ActionReducerMap<AppState> ={
  shoppingList:fromShoppingListReducer.ShoppingListRecuder
}
