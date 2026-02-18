
import { Component, inject, Input, OnInit, WritableSignal, signal } from '@angular/core';
import { CartService } from './sercice/cart.service';
import { CartDEtils } from './models/cart-detils.interface';
import { RouterLink } from '@angular/router';

@Component({
  
  selector: 'app-card',
   standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {

  private readonly cartervice =inject(CartService)
  


cartDetailsData:WritableSignal<CartDEtils> = signal<CartDEtils>({} as CartDEtils)

ngOnInit(): void {
 this.getUserCartData();
}

getUserCartData():void{
 this.cartervice.getLocedusercart().subscribe({
    next:(res)=>{
if (res.status==="success") {
 this.cartDetailsData.set(res.data)
}

    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}

removeProductitemfromCart(id: string): void {
  this.cartervice.removeDetailsData(id ,1).subscribe({
    next: (res) => {
      if (res.status === 'success') {
        this.cartDetailsData.set(res.data);
      }
    },
    error: (err) => {
      console.log(err);
    }
  });
}

updataProductcount( cartid:string , count:number):void{
this.cartervice.UpdataProductcart(cartid ,count).subscribe({
next:(res)=>{
if (res.status==="success") {
 this.cartDetailsData.set(res.data)
}

    },
  error:(err)=>{
    console.log(err);
    
  }
})
}

}
