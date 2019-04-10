import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFichierComponent } from './component/fichier/list-fichier/list-fichier.component';
import { NouveauFichierComponent } from './component/fichier/nouveau-fichier/nouveau-fichier.component';
import { NavBarComponent } from './component/vue/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FichierService } from './service/fichier.service';
import { ServeurCategorieComponent } from './component/serveur/serveur-categorie/serveur-categorie.component';
import { ServeurService } from './service/serveur.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FichierSelectionnerComponent } from './component/fichier/fichier-selectionner/fichier-selectionner.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule }    from '@angular/forms';
import { FichierAutomatComponent } from './component/fichierAutomatisation/fichier-automat/fichier-automat.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import * as $ from 'jquery/dist/jquery.min.js';
import { HomeApplicationLoggComponent } from './component/vue/home-application-logg/home-application-logg.component';



@NgModule({
  declarations: [
    AppComponent,
    ListFichierComponent,
    NouveauFichierComponent,
    NavBarComponent,
    ServeurCategorieComponent,
    FichierSelectionnerComponent,
    FichierAutomatComponent,
    HomeApplicationLoggComponent,
    
   // HttpClientModule
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    NgxPaginationModule
  ],
  providers: [FichierService,ServeurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
