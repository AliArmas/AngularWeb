import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductsService } from '../../API/products.service';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  product = {
    id : 0,
    name : '',
    price : '',
    description : '',
    manufacurer : '',
    category : '',
  }




  constructor(private APIsvc: ProductsService) { }

  ngOnInit(): void {
    console.log('Productos ☺☺');

  }

  agregarProducto() {

    this.APIsvc.POST_product(this.product).subscribe(data =>{});
    this.reset();
  }


  reset() {
    this.product.id = null;
    this.product.name = '';
    this.product.price = '';
    this.product.description ='';
    this.product.manufacurer = '';
    this.product.category = '';
  }

}
