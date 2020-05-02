import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { ShoppingListItem } from '../shopping-list.module';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
 @ViewChild('f' , {
   static:false
 }) itemform:NgForm;


  constructor(private _shoppinglistservice:ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(itemForm:NgForm){
    const value = itemForm.value;
    const newItem = new ShoppingListItem(value.itemname , value.quantity, value.price);
    this._shoppinglistservice.addItemsToList(newItem)
  }

}
