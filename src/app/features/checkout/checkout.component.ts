import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../card/sercice/cart.service';

@Component({
  selector: 'app-checkout',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  standalone:true,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {


   private readonly activatedRoute = inject(ActivatedRoute);
   private readonly fb = inject(FormBuilder);
   private readonly cartService = inject(CartService);


checkoutForm!: FormGroup;





checkOutForminit():void{
  this.checkoutForm=this.fb.group({
  shippingAddress: this.fb.group({
    details: [null, [Validators.required]],
    phone: [
      null,
      [
        Validators.required,
        Validators.pattern(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/),
      ],
    ],
    city: [null, [Validators.required]],
  }),
});
}

onSubmitCheckoutForm(): void {
  if (this.checkoutForm.valid) {

    // console.log(this.checkoutForm.value); 
    // console.log(this.cartId); 
this.cartService.chekOutsessaion(this.cartId ,this.checkoutForm.value).subscribe({
  next:(res)=>{
    if (res.status==="success") {
      window.open(res.session.url , "_self");
    }
    
  },
  error:(error)=>{
    console.log(error);
    
  }
})
  }
}


  cartId:string|null=null
  ngOnInit(): void {
   this.checkOutForminit();
    this.getCartId();
  
  }





  getCartId(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (urlParams) => {
      this.cartId = urlParams.get('id');
      }
    });
  }
}
