import { Component, OnInit } from '@angular/core';
import { ServeurService } from 'src/app/service/serveur.service';
import { ServeurModule } from 'src/app/model/serveur/serveur.module';
import { FichierService } from 'src/app/service/fichier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serveur-categorie',
  templateUrl: './serveur-categorie.component.html',
  styleUrls: ['./serveur-categorie.component.css']
})
export class ServeurCategorieComponent implements OnInit {
  imagesCategorieServeur:Array<string>=[
    "assets/images/serveur1.jpg","assets/images/serveur2.jpg",
    "assets/images/serveur3.jpg","assets/images/serveur4.jpg"
  ]
  imagesCategorie
  serv
  categoriesServeurs
  fichiersByCat:any
  serveur:ServeurModule= new ServeurModule()


  constructor(private categorieServer:ServeurService,private fichierServeur:FichierService,
    private router:Router
    ) { }

  ngOnInit() {
    this.categorieServer.getCategories()
      .subscribe(data=>{
         for(let image of this.imagesCategorieServeur){
             console.log(image)
         }

        this.categoriesServeurs=data
      },error=>{
        console.log(error)
      })     
  }
  getFilesByServer(id:number){
    // this.fichierServeur.getFilesByCategorie(id).subscribe(
    //   data=>{
    //       this.fichiersByCat=data
    //       console.log(data)
    //   }, error=>{
    //     console.log(error)
    //   }
    // )
    console.log(id)
    this.router.navigate(['listFichierSelectionner',id])

  }
  getOne(id:number){
    console.log(id)
    this.categorieServer.getOneCategorie(id).subscribe(data=>{
      this.serv=data
      console.log("this.serv")
    },error=>{
        console.log(error)
    }
    )
  }





}
