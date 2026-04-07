import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private s:DataService){}
  products:any;
  ngOnInit(){
    this.s.getproducts().subscribe((res)=> {
      this.products=res;
    })
  }

}
