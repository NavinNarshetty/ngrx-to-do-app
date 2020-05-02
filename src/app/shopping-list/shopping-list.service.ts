import { Injectable } from '@angular/core';
import { ShoppingListItem } from './shopping-list.module';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  public ItemChanged = new Subject<ShoppingListItem[]>()
  private itemList:ShoppingListItem[] = [
    new ShoppingListItem('Milk' , 2 ,50),
    new ShoppingListItem('Bread' , 1, 30)
  ]

  constructor() { }


  get itemfromList(){
    return this.itemList.slice();
  }



  addItemsToList(newItem:ShoppingListItem){
    this.itemList.push(newItem);
    this.ItemChanged.next(this.itemList.slice())
  }
}
