import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { ShoppingListItem } from '../shopping-list.module';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit , OnDestroy {
 @ViewChild('f' , {
   static:false
 }) itemform:NgForm;
 editMode:boolean = false;
 itemToBeUpdated_index:number;
 firstSubscription:Subscription;


  constructor(private _shoppinglistservice:ShoppingListService) { }

  ngOnInit() {
  this.firstSubscription=  this._shoppinglistservice.startEdit.subscribe((index:number)=>{
      this.editMode = true;
      let item = this._shoppinglistservice.itemfromList[index];
      this.itemToBeUpdated_index = index;
      this.itemform.setValue({
        itemname:item.name,
        quantity:item.quantity,
        price:item.price
      })
    })
  }

  onSubmit(itemForm:NgForm){
    if(!itemForm.valid){
      return;
    }
    const value = itemForm.value;
    const newItem = new ShoppingListItem(value.itemname , value.quantity, value.price);
    if(this.editMode){
      this._shoppinglistservice.updateItemToList(this.itemToBeUpdated_index , newItem);
      this.editMode = false;
    }else{
      this._shoppinglistservice.addItemsToList(newItem)

    }
    this.itemform.reset();

  }
  onDelete(){
    this._shoppinglistservice.deleteItemFromList(this.itemToBeUpdated_index);
    this.itemform.reset();
    this.editMode= false;
  }

  ngOnDestroy(){
    this.firstSubscription.unsubscribe();
  }

}
