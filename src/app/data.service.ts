import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private htttp:HttpClient) { }
  getproducts(){
    return this.htttp.get("https://fakestoreapi.com/products");
  }
}
