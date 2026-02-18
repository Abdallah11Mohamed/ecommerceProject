import { CartService } from './../card/sercice/cart.service';
import { Component, inject, Input, input, OnInit, signal, WritableSignal } from '@angular/core';
import { ProductService } from '../../core/services/products/service-product.service';
import { Iproduct } from '../../core/models/products/iproduct.interface';
import { RouterLink } from "@angular/router";
import {NgxPaginationModule, PaginationInstance} from 'ngx-pagination';
import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { SearchPipe } from '../../chared/pipes/search-pipe';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-products',
  imports: [RouterLink , NgxPaginationModule ,UpperCasePipe ,SearchPipe,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {


  
private readonly cartService = inject(CartService);
private readonly productService =inject(ProductService);
private readonly toastrService = inject(ToastrService);

productList: WritableSignal<Iproduct[]> = signal<Iproduct[]>([]);




AddProductItemtocart(id: string): void {


  this.cartService.Addproducttocart(id).subscribe({
    next:(res)=>{
      if (res.status==="success") {
        this.toastrService.success(res.message , "freshcart")
      }
    },
    error:(error)=>{
      console.log(error);
      
    }
  });
}



paginate:PaginationInstance ={
   id: 'products',
 itemsPerPage: 40,
currentPage: 1,
totalItems: 0 ,
};


text:string="";




ngOnInit(): void {
this.getAllPrudectData();

  
}









getAllPrudectData():void{
   this.productService.getproducts(this.paginate.currentPage , this.paginate.itemsPerPage).subscribe({
    next:(res)=>{
      
      this.productList.set(res.data)
      this.paginate.totalItems = res.results
    },
    error:(error)=>{
      console.log(error);
      
    }
  })
}






pageChanged(page:number):void{
  this.paginate.currentPage=page;
 this.getAllPrudectData()
}






}

