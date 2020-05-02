import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListItem } from '../shopping-list.module';
import { Subscription } from 'rxjs';
import * as appReducerState from '../../store/app.reducer'
import { Store } from '@ngrx/store';
import * as fromShoppingListActions from '../store/shopping-list.actions'

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
 editItem:ShoppingListItem;
 firstSubscription:Subscription;


  constructor(private _store:Store<appReducerState.AppState>) { }

  ngOnInit() {
  this.firstSubscription=this._store.select('shoppingList').subscribe((stateData)=>{
      if(stateData.editIndex > -1){
        this.editMode = true;
        this.itemToBeUpdated_index = stateData.editIndex;
        this.editItem = stateData.editItem;
        this.itemform.setValue({
          itemname:this.editItem.name,
          quantity:this.editItem.quantity,
          price:this.editItem.price
        })

      }else{
        //do somthing
        this.editMode= false;
      }
    })
  }

  onSubmit(itemForm:NgForm){
    if(!itemForm.valid){
      return;
    }
    const value = itemForm.value;
    const newItem = new ShoppingListItem(value.itemname , value.quantity, value.price);
    if(this.editMode){
      this._store.dispatch(new fromShoppingListActions.UpdateItem({index:this.itemToBeUpdated_index , newitem:newItem}))
    }else{
      this._store.dispatch( new fromShoppingListActions.AddItem(newItem))

    }
    this.editMode = false;
    this.itemform.reset();

  }
  onDelete(){
    this._store.dispatch(new fromShoppingListActions.DeleteItem())
    this.itemform.reset();
    this.editMode= false;
  }

  ngOnDestroy(){
    this.firstSubscription.unsubscribe();
  }

}
