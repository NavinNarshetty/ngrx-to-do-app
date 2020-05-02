
import { Action } from "@ngrx/store";


import * as ShoppingListAction from './shopping-list.actions'
import { ShoppingListItem } from '../shopping-list.module';


export interface AppState {
  listItems:ShoppingListItem[];
  editIndex:number;
  editItem:ShoppingListItem
}

const InitialState:AppState = {
  listItems:[
    new ShoppingListItem('Milk' , 2 ,50),
    new ShoppingListItem('Bread' , 1, 30)
  ],
  editIndex:-1,
  editItem:null
}



export function ShoppingListRecuder(state=InitialState,action:ShoppingListAction.ShoppingListActions){
  switch (action.type) {
    case ShoppingListAction.ADD_ITEM:
      return{
        ...state,
        listItems:[
          ...state.listItems,
          action.payload
        ],
        editIndex:-1,
        editItem:null
      }
      break;
    case ShoppingListAction.UPDATE_ITEM:
      const item = state.listItems[action.payload.index];
      const updatedItem = {
        ...item,
        ...action.payload.newitem
      }
      const updateListItems  = [...state.listItems];
      updateListItems[action.payload.index]= updatedItem
      return {
        ...state,
        listItems:updateListItems
      }
      break;
    case ShoppingListAction.START_EDIT:
      return{
        ...state,
        editIndex:action.payload,
        editItem:{...state.listItems[action.payload]}
      }
    default:
    case ShoppingListAction.STOP_EDIT:
      return{
        ...state,
        editIndex:-1,
        editItem:null
      }
      break;
      return state;
      break;
  }
}
