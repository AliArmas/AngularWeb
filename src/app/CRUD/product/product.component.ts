import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../API/products.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private apiSVC:ProductsService) { }

  idEdit = 0;
  idDelete = 0;

  Put_product = {
    id: null,
    name: '',
    price: '',
    description: '',
    manufacurer: '',
    category: '',
  }

  ngOnInit(): void {
  
  }

  delete(id){
    this.apiSVC.DELETE_Product(id).subscribe();
  }

  editProd(id){
    this.apiSVC.PUT_Product(this.Put_product, this.idEdit).subscribe();
  }

}
