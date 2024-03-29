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
import { ElasticSearshComponent } from './component/stats/elastSolution/elastic-searsh/elastic-searsh.component';
import { AideGeneraleComponent } from './component/vue/aide-generale/aide-generale.component';
import { FooterComponent } from './component/vue/footer/footer.component';
import { ExtractionDonneesService } from './service/extraction-donnees.service';
import { DataExtractionComponent } from './component/extraxtionDonnees/data-extraction/data-extraction.component';



// import { AccordionModule } from 'primeng/components/accordion/accordion';
// import { PanelModule } from 'primeng/components/panel/panel';
// import { ButtonModule } from 'primeng/components/button/button';
// import { RadioButtonModule } from 'primeng/components/radioButton/radioButton';

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
    ElasticSearshComponent,
    AideGeneraleComponent,
    FooterComponent,
    DataExtractionComponent,
    
    
   // HttpClientModule
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    NgxPaginationModule,
    // AccordionModule,
    // PanelModule,
    // ButtonModule,
    // RadioButtonModule
    
  ],
  providers: [FichierService,ServeurService,ExtractionDonneesService],
  bootstrap: [AppComponent],
})
export class AppModule { }
