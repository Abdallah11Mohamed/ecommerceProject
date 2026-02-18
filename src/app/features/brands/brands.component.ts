import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { BrandsService } from '../../core/services/brand/brands.service';
import { Brands } from '../../core/models/brands/brands.interface';


@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css',
})
export class BrandsComponent implements OnInit {
  private readonly brandsService = inject(BrandsService);

   brandsList: WritableSignal<Brands[]> = signal<Brands[]>([]);

   ngOnInit(): void {


   
    
this.brandsService.getBrands().subscribe({
  next: (res) => {
 this.brandsList.set(res.data)
  },
  error: (error) => {
    console.log(error);
  }
});
   }
  }