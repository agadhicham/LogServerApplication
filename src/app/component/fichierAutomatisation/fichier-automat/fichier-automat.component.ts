import { Component, OnInit, Inject, inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FichierService } from 'src/app/service/fichier.service';
import { FichierModule } from 'src/app/model/fichier/fichier.module';
import { DomSanitizer } from '@angular/platform-browser';
import { template } from '@angular/core/src/render3';
import * as $ from 'jquery/dist/jquery.min.js';
import { ListFichierComponent } from '../../fichier/list-fichier/list-fichier.component';
import * as deepEqual from "deep-equal";

@Component({
  selector: 'app-fichier-automat',
  templateUrl: './fichier-automat.component.html',
  styleUrls: ['./fichier-automat.component.css']
 
})

export class FichierAutomatComponent implements OnInit {
      dataPlus
     fichie:any
     fichiers
     fichier:any
     fich: FichierModule=new FichierModule
  constructor(public activateRoute:ActivatedRoute,public router:Router, private fichierService:FichierService,
    private sanitizer:DomSanitizer, private listFichier:ListFichierComponent
    ) {

    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^')
    console.log(activateRoute.snapshot.params['id']);
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxx')
    activateRoute= activateRoute.snapshot.params['id'];
   }

  ngOnInit() {
     
    this.fichierService.getFilesByCategori(this.activateRoute.snapshot.params['id']).subscribe(data=>{
      this.fichier=data
      console.log("$$$$$$$$$$")
     data.forEach((element: any) => {
       this.fichier= element
       if(this.fichier.id = this.activateRoute.snapshot.params['id']){
         JSON.stringify(this.dataPlus)
        console.log(this.fichier.id,this.fichier.fileName)
       console.log(this.fichier)
         this.dataPlus=this.fichier.id
       }
     });
     },error=>{
       console.log(error)
     })
   

    this.fichierService.getOneFile(this.activateRoute.snapshot.params['id']).subscribe(
      data=>{
        this.fichie = this.sanitizer.bypassSecurityTrustHtml(data);         
        this.fichiers=data
        //this.fich=data
        console.log('fichier recuperer est'+this.activateRoute.snapshot.params['id'])     
      },error=>{
        console.log(error)
      })
  }

  morInformation(){
    this.fichierService.getFilesByCategorie(this.activateRoute.snapshot.params['id']).subscribe(data=>{
      this.fichier=data
     },error=>{
       console.log(error)
     })
  }

  ConvertToJSON(dataPlus: any) {
    return JSON.parse(dataPlus);
}


}
