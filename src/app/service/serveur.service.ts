import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServeurService {
  urlServerApi:string="http://localhost:8081/categories";

  constructor(private httpServiceCate:HttpClient) { }
 
 
  getCategories(){
    return this.httpServiceCate.get(this.urlServerApi+"/allCategories")
  }getOneServerCategorie


  getOneCategorie(id:number):Observable<any>{
    return this.httpServiceCate.get(this.urlServerApi+"/getOneServerCategorie/" +id)
  }
}

  


