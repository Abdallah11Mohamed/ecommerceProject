import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { CategoriesService } from '../../core/services/categore/categories.service';
import { Categores } from '../../core/models/categories/categores.interface';


@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  private readonly categoriesService = inject(CategoriesService);
  categorelist:WritableSignal<Categores[]>=signal<Categores[]>([])

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe({
      next:(res)=>{
      this.categorelist.set(res.data)
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }

}