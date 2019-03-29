import { Component, OnInit } from '@angular/core';
import { FichierService } from 'src/app/service/fichier.service';
import { FichierModule } from 'src/app/model/fichier/fichier.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fichier-selectionner',
  templateUrl: './fichier-selectionner.component.html',
  styleUrls: ['./fichier-selectionner.component.css']
})
export class FichierSelectionnerComponent implements OnInit {
  private pageFichiers:any
     listFichiers
    // fichier: FichierModule= new FichierModule()
    page:number=0
    size:number=20
    motCle:string=""
    id:any;
    fichier:any
  // fichier:FichierModule=new FichierModule()
   idCat:any
   files
  constructor(private fichierServeur:FichierService, public activateRoute:ActivatedRoute,private router:Router) { 
    
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^')
    console.log(activateRoute.snapshot.params['id']);
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxx')
    activateRoute= activateRoute.snapshot.params['id'];
    //this.fichierServeur.getFilesByCategorie(activateRoute.snapshot.params['id'])
  }

  ngOnInit() {

    this.fichierServeur.getFilesByCategorie(this.activateRoute.snapshot.params['id']).subscribe(data=>{
     this.fichier=data
    },error=>{
      console.log(error)
    })
    
  }
  getOneFile(id:any){
    console.log(id)
    this.router.navigate(['fichierAutomatiser',id])
  }

  doSearch() {
    this.pageFichiers;
    this.fichierServeur
      .searsheFile(this.motCle, this.page, this.size)
      .subscribe(
        data => {
          console.log("*********");
          this.pageFichiers = data;
          // this.pages= new Array(data.totalPages);
          // this.pages = new Array(this.totalPages);
          // console.log(this.pages);
          console.log(this.pageFichiers);
        },
        error => {
          console.log(error);
        }
      );
  }
  chercher() {
    this.doSearch();
  }

}
