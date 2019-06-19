import { Component, OnInit, Inject, inject, Injectable, Pipe } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FichierService } from 'src/app/service/fichier.service';
import { FichierModule } from 'src/app/model/fichier/fichier.module';
import { DomSanitizer } from '@angular/platform-browser';
import { template, text } from '@angular/core/src/render3';
import * as $ from 'jquery/dist/jquery.min.js';
import { ListFichierComponent } from '../../fichier/list-fichier/list-fichier.component';
import * as deepEqual from "deep-equal";
import { ExtractionDonneesService } from 'src/app/service/extraction-donnees.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fichier-automat',
  templateUrl: './fichier-automat.component.html',
  styleUrls: ['./fichier-automat.component.css']
 
})
@Pipe({ name: 'fichie', pure: false })

export class FichierAutomatComponent implements OnInit {
     //http:HttpClient
     texte
     dataPlus
     fichie:any
     fichiers
     fichier:any
     extrData:any
     extrDataOcurrence:any
     extrDataDate:any
     rechercheParCle:string
     fich: FichierModule=new FichierModule
     id:any
     constructor(public activateRoute:ActivatedRoute,public router:Router, private fichierService:FichierService,
    private sanitizer:DomSanitizer, private listFichier:ListFichierComponent, private extractionDataService: ExtractionDonneesService,
    private http:HttpClient
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
   


     console.log("-+-+-+-+-+-+-+-+-+-+")
     console.log(this.activateRoute.snapshot.params['id'])
         console.log("-+-+-+-+-+-+-+-+-+-+")
    this.fichierService.getOneFile(this.activateRoute.snapshot.params['id']).subscribe(
      data=>{
        this.fichie = this.sanitizer.bypassSecurityTrustHtml(data)
        // this.sanitizer.bypassSecurityTrustHtml(data).forEach((txt: any)=>{
        //    this.texte=txt
        //    console.log(txt)
        //  })
        // if(this.fichie =! null){
        //     console.log("test valider")
        //     console.log(this.fichie)
        // }
        // else{
        //   console.log("echec")
        // }       
        //console.log(data)
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

rechercherManuel(){
  if(this.rechercheParCle == null){
    console.log("remplir le champ de recherche SVP !!! ")
  }
  else{
    console.log(this.rechercheParCle)
    console.log(this.fichiers)     
    this.elementExiste()
  }

}
getJsonData(id:string){
  return this.http.get('http://localhost:8081/tomcat/server/serverDate/'+id).subscribe(
    data=>{
      this.extrData=data
      console.log(this.extrData)
    }
  )
  
  //(rmapes => res.json());
}

getOcurrence(id:string){
  return this.http.get('http://localhost:8081/tomcat/server/serverCleOccurence/'+id).subscribe(
    data=>{
      this.extrDataOcurrence=data
      console.log(this.extrDataOcurrence)
    }
  )
  
  //(rmapes => res.json());
}


getDateCompleteFormatForWorldKey(id:string){
  return this.http.get('http://localhost:8081/tomcat/server/serverDateFormat/'+id).subscribe(
    data=>{
      this.extrDataDate=data
      console.log(this.extrDataDate)
    }
  )
  
  //(rmapes => res.json());
}

dataExtraction(id:string){
  
  this.extractionDataService.getDataExtractionForOccurenceAndDates(this.activateRoute
    .snapshot.params[id]).subscribe(data=>{
      console.log(this.activateRoute.snapshot.params[id])
      this.extrData=data;
      console.log("-+-+-+-+-+-+-+-+-+-+")
      console.log(this.extrData)
      console.log(this.activateRoute.snapshot.params[id])
      console.log("-+-+-+-+-+-+-+-+-+-+")
    },error=>{
      let message: string="l'extraction des informations de date et d'ocurrence à échoué"
      console.log(error+message)
    })
}

elementExiste(){ 
}
}