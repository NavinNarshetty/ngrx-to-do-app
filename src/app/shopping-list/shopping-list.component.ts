import { Component, OnInit } from '@angular/core';
import { ShoppingListItem } from './shopping-list.module';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as appReducerState from '../store/app.reducer';
import * as fromShoppingListAction from '../shopping-list/store/shopping-list.actions'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  public shoppingListItem:Observable<{listItems:ShoppingListItem[]}>;
  constructor(private _store:Store<appReducerState.AppState>) { }

  ngOnInit() {
    this.shoppingListItem = this._store.select('shoppingList')
  }



  onEditItem(index:number){
    this._store.dispatch(new fromShoppingListAction.StartEdit(index))
  }

}
