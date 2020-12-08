import { Injectable } from '@angular/core';

import { Product } from '../CRUD/models/Product';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private api: HttpClient) { }


  private API_URL = 'http://http://127.0.0.1:8000/api/v1'
  private RESTFUL = 'http://127.0.0.1:8000/api/v1/products/'


  GET_Products():Observable<Product[]> {
    return this.api.get<Product[]>('http://127.0.0.1:8000/api/v1/products/?ordering=id');
    //return this.api.get<Product[]>(`${this.API_URL}/products`);
  }

  GET_Product(id: string): Observable<Product>{
    return this.api.get<Product>(`${this.API_URL}/products/${id}/`);
  }

  POST_product(product:Product): Observable<Product> {
    return this.api.post<Product>(this.RESTFUL,product);
  }


  PUT_Product(product:Product,p_id): Observable<Product>{
    return this.api.put<Product>(`http://127.0.0.1:8000/api/v1/products/${p_id}/`,product);
  }

  DELETE_Product(id): Observable<{}>{
    return this.api.delete(`http://127.0.0.1:8000/api/v1/products/${id}/`);
  }

}
