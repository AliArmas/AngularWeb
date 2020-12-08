import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/API/products.service';
import { Product } from '../models/Product';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private apiSVC:ProductsService) { }

  products:Product[];

  ngOnInit(): void {
    this.getProductos();
    console.log(this.products); 
  }

  getProductos(){
    this.apiSVC.GET_Products().subscribe( data => (this.products=data));
  }


}
