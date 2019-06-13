import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildActivationEnd } from '@angular/router';
import { ListFichierComponent } from './component/fichier/list-fichier/list-fichier.component';
import { NouveauFichierComponent } from './component/fichier/nouveau-fichier/nouveau-fichier.component';
import { ServeurCategorieComponent } from './component/serveur/serveur-categorie/serveur-categorie.component';
import { FichierSelectionnerComponent } from './component/fichier/fichier-selectionner/fichier-selectionner.component';
import { FichierAutomatComponent } from './component/fichierAutomatisation/fichier-automat/fichier-automat.component';
import { HomeApplicationLoggComponent } from './component/vue/home-application-logg/home-application-logg.component';
import { ElasticSearshComponent } from './component/stats/elastSolution/elastic-searsh/elastic-searsh.component';
import { AideGeneraleComponent } from './component/vue/aide-generale/aide-generale.component';

const routes: Routes = [
{path:'',pathMatch:"full",redirectTo:"/homePage"},
{path:"listFichier" ,component:ListFichierComponent},
{path:"nouveauFichier", component:NouveauFichierComponent},
{path:"serveurCat", component:ServeurCategorieComponent},
{path:"fichierAutomatiser/:id", component:FichierAutomatComponent},
{path:"homeApplication", component:HomeApplicationLoggComponent},
{path:'listFichierSelectionner/:id', component:FichierSelectionnerComponent},
{path:"homePage" , component:HomeApplicationLoggComponent},
{path:"statistique" , component:ElasticSearshComponent},
{path:"focus",component:AideGeneraleComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
