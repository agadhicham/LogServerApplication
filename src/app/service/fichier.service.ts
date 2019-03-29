import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServeurModule } from '../model/serveur/serveur.module';
import { ServeurService } from './serveur.service';
import { Observable } from 'rxjs';
import { FichierModule } from '../model/fichier/fichier.module';
import { text } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class FichierService {

  fichier:FichierModule=new FichierModule()

      serveurCategorie:ServeurModule= new ServeurModule();
    urlFileApi:string="http://localhost:8081";
    //urlServerApi:string="http://localhost:8081/categories";

  constructor(private httpFile:HttpClient) { }

getAllFile(){
  return this.httpFile.get( this.urlFileApi + "/getAllFiles")
}

getFilesByCategorie(id:number):Observable<any>{
  return this.httpFile.get(this.urlFileApi+"/filesOfCat/" +id)
}

saveFile(fichier:FichierModule):Observable<any>{
  //const headers = new HttpHeaders().set("","");

  return this.httpFile.post(this.urlFileApi+"/uploadFile",fichier)

}
getOneFile(id:any):Observable<any>{
   return this.httpFile.get(this.urlFileApi+"/downloadFile/"+id,{responseType: 'text'})
}

searsheFile(motCle:string,page:number,size:number):Observable<any>{
return this.httpFile.get(this.urlFileApi+"/chercherUnFichier?motCle="+motCle+"&size="+size+"&page="+page)
}
searsheFilee(motCle:string,page:number,size:number):Observable<any>{
  return this.httpFile.get(this.urlFileApi+"/chercherUnFichier?motCle="+motCle+"&size="+size+"&page="+page)
  }

}
