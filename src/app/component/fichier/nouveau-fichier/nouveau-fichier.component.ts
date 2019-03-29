import { Component, OnInit } from '@angular/core';
import { FichierService } from 'src/app/service/fichier.service';
import { FichierModule } from 'src/app/model/fichier/fichier.module';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-nouveau-fichier',
  templateUrl: './nouveau-fichier.component.html',
  styleUrls: ['./nouveau-fichier.component.css']
})
export class NouveauFichierComponent implements OnInit {

  fichier:FichierModule=new FichierModule()
  constructor(private fichierService:FichierService,public router:Router) { }

  ngOnInit() {
  }


  saveFile(dataForm)
{
  this.fichierService.saveFile(dataForm).subscribe(
    data=>{
      console.log("addaddadd")
      //this.fichier=data
      console.log("file enregestrer avec succes",data)
      this.router.navigate(['listFichier'])
        
    },error=>{
      console.log(error)
    }
  )
}



}
