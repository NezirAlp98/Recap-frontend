import { Injectable } from '@angular/core';
import { CarDetail } from '../models/carDetail';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(car:CarDetail){
    let item=CartItems.find((c)=>c.carDetail.id==car.id);
    if (item) {
      item.quantity+=1
    }else{
      let cartItem=new CartItem();
      cartItem.carDetail=car;
      cartItem.quantity+=1;
      CartItems.push(cartItem);
    }
  }
  removeFromCart(car:CarDetail){
    let item:any=CartItems.find((c)=>c.carDetail.id==car.id);
    CartItems.splice(CartItems.indexOf(item),1);
  }
  list():CartItem[]{
    return CartItems;
  }
}
