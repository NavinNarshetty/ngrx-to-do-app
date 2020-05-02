import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListItem } from './shopping-list.module';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as appReducerState from '../store/app.reducer'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  public shoppingListItem:Observable<{listItems:ShoppingListItem[]}>;
  constructor(private _shoppinglistservice:ShoppingListService , private _store:Store<appReducerState.AppState>) { }

  ngOnInit() {
    //  this.shoppingListItem = this._shoppinglistservice.itemfromList
    this.shoppingListItem = this._store.select('shoppingList')
    //  this._shoppinglistservice.ItemChanged.subscribe((items:ShoppingListItem[])=>{
    //   this.shoppingListItem = items;
    //  });
  }



  onEditItem(index:number){
    this._shoppinglistservice.startEditing(index);
  }

}
