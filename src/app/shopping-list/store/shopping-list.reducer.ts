
import { Action } from "@ngrx/store";


import * as ShoppingListAction from './shopping-list.actions'
import { ShoppingListItem } from '../shopping-list.module';


export interface AppState {
  listItems:ShoppingListItem[];
}

const InitialState:AppState = {
  listItems:[
    new ShoppingListItem('Milk' , 2 ,50),
    new ShoppingListItem('Bread' , 1, 30)
  ]
}



export function ShoppingListRecuder(state=InitialState,action:ShoppingListAction.ShoppingListActions){
  switch (action.type) {
    case ShoppingListAction.ADD_ITEM:
      return{
        ...state,
        listItems:[
          ...state.listItems,
          action.payload
        ]
      }
      break;

    default:
      return state;
      break;
  }
}
