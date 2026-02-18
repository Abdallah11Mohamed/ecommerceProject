import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsService } from '../products/services/productDetails/product-details.service';
import { Iproduct } from '../../core/models/products/iproduct.interface';

@Component({
  selector: 'app-detalis',
  standalone: true,
  templateUrl: './detalis.component.html',
  styleUrl: './detalis.component.css',
})
export class DetalisComponent implements OnInit {
  private readonly productDetailsService = inject(ProductDetailsService);
  private readonly activatedRoute = inject(ActivatedRoute);

  productId: string | null = null;
  product: Iproduct | null = null;
  loading = true;
  error = false;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (urlParams) => {
        this.productId = urlParams.get('id');
        this.loading = true;
        this.error = false;
        this.product = null;

        if (!this.productId) {
          this.loading = false;
          return;
        }

        this.productDetailsService.productDetails(this.productId).subscribe({
          next: (res) => {
            this.product = res.data;
            this.loading = false;
          },
          error: () => {
            this.error = true;
            this.loading = false;
          },
        });
      },
    });
  }
}
