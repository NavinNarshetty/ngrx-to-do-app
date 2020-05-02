import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListItem } from './shopping-list.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  public shoppingListItem:ShoppingListItem[];
  constructor(private _shoppinglistservice:ShoppingListService) { }

  ngOnInit() {
     this.shoppingListItem = this._shoppinglistservice.itemfromList
     this._shoppinglistservice.ItemChanged.subscribe((items:ShoppingListItem[])=>{
      this.shoppingListItem = items;
     });
  }



  onEditItem(index:number){
    this._shoppinglistservice.startEditing(index);
  }

}
