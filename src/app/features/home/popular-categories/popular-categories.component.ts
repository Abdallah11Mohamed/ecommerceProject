

import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { CategoriesService } from '../../../core/services/categore/categories.service';
import { Icategories } from '../../../core/models/categories/icategories.interface';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-popular-categories',
  imports: [CarouselModule,],
  templateUrl: './popular-categories.component.html',
  styleUrl: './popular-categories.component.css',
})
export class PopularCategoriesComponent implements OnInit {
private readonly categoriesService = inject(CategoriesService)

categorieslist:WritableSignal<Icategories[]>=signal<Icategories[]>([])

ngOnInit(): void {
  this.categoriesService.getCategories().subscribe({
    next:(res)=>{
     this.categorieslist.set(res.data)
      
    },
    error:(error)=>{
      console.log(error);
      
    }
  })
}




categoriesCustomOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }



}

