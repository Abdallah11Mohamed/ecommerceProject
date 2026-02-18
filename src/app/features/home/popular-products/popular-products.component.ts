import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Iproduct } from '../../../core/models/products/iproduct.interface';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../../core/services/products/service-product.service';
import { CartService } from '../../card/sercice/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-popular-products',
  imports: [RouterLink],
  templateUrl: './popular-products.component.html',
  styleUrl: './popular-products.component.css',
})
export class PopularProductsComponent implements OnInit {
  private readonly productService = inject(ProductService);
  private readonly cartService = inject(CartService);
   private readonly toastrService = inject(ToastrService);


  productList: WritableSignal<Iproduct[]> = signal<Iproduct[]>([]);

  AddProductitems(id: string): void {
    this.cartService.Addproducttocart(id).subscribe({
      next: (res) => {
this.toastrService.success(res.message , "freshcart")
      },
      error: (err) => console.log(err),
    });
  }

  ngOnInit(): void {
    this.productService.getproducts().subscribe({
      next: (res) => this.productList.set(res.data ?? []),
      error: (err) => console.log(err),
    });
  }
}
