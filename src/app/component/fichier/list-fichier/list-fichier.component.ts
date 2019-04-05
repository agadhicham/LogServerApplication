import { Component, OnInit, Injectable } from '@angular/core';
import { FichierService } from 'src/app/service/fichier.service';
import { FichierModule } from 'src/app/model/fichier/fichier.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-fichier',
  templateUrl: './list-fichier.component.html',
  styleUrls: ['./list-fichier.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ListFichierComponent implements OnInit {
     pageFichiers:any
     listFichiers
    // fichier: FichierModule= new FichierModule()
    page:number=0
    size:number=20
    motCle:string="";
 

  constructor(private httpServiceFile:FichierService,private router:Router) { }

  ngOnInit() 
  {
    this.httpServiceFile.searsheFile(this.motCle,this.size,this.page).subscribe(
      data=>{
        this.pageFichiers=data
      },error=>{
        console.log(error)
      }
    )
  }


  getFilesByServer(id:number)
  {
    console.log(id)
    this.router.navigate(['listFichierSelectionner',id])
  }

  doSearch() 
  {
    this.pageFichiers;
    this.httpServiceFile
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
