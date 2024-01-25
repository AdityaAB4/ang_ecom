import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductService } from '../../../../services/product/product.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  products$:Observable<any>;
  constructor(private prodycrSrv: ProductService){
    this.products$ = this.prodycrSrv.getCategory().pipe(
      map((item:any)=>{
        return item.data;
      })
    );
  }

  getAllCategory(){
     
   

  }

}
