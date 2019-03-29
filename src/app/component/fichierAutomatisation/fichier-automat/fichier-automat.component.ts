import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FichierService } from 'src/app/service/fichier.service';
import { FichierModule } from 'src/app/model/fichier/fichier.module';
import { DomSanitizer } from '@angular/platform-browser';
import { ListFichierComponent } from '../../fichier/list-fichier/list-fichier.component';

@Component({
  selector: 'app-fichier-automat',
  templateUrl: './fichier-automat.component.html',
  styleUrls: ['./fichier-automat.component.css']
})
export class FichierAutomatComponent implements OnInit {
    fichier:any
     fichiers
  constructor(public activateRoute:ActivatedRoute,public router:Router, private fichierService:FichierService,
    private sanitizer:DomSanitizer,private listfichier:ListFichierComponent) {

    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^')
    console.log(activateRoute.snapshot.params['id']);
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxx')
    activateRoute= activateRoute.snapshot.params['id'];
   }

  ngOnInit() {
    this.fichierService.getOneFile(this.activateRoute.snapshot.params['id']).subscribe(
      data=>{
        this.fichier = this.sanitizer.bypassSecurityTrustHtml(data);         
        this.fichiers=data
        this.fichier=data;
        console.log('fichier recuperer est'+this.activateRoute.snapshot.params['id'])
      },error=>{
        console.log(error)
      })
  }


}
