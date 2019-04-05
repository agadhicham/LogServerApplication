import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFichierComponent } from './component/fichier/list-fichier/list-fichier.component';
import { NouveauFichierComponent } from './component/fichier/nouveau-fichier/nouveau-fichier.component';
import { ServeurCategorieComponent } from './component/serveur/serveur-categorie/serveur-categorie.component';
import { FichierSelectionnerComponent } from './component/fichier/fichier-selectionner/fichier-selectionner.component';
import { FichierAutomatComponent } from './component/fichierAutomatisation/fichier-automat/fichier-automat.component';
import { HomeApplicationLoggComponent } from './component/vue/home-application-logg/home-application-logg.component';

const routes: Routes = [
{path:'',pathMatch:"full",redirectTo:"/serveurCat"},
{path:"listFichier" ,component:ListFichierComponent},
{path:"nouveauFichier", component:NouveauFichierComponent},
{path:"serveurCat", component:ServeurCategorieComponent},
{path:"fichierAutomatiser/:id", component:FichierAutomatComponent},
{path:"homeApplication", component:HomeApplicationLoggComponent},
{path:'listFichierSelectionner/:id', component:FichierSelectionnerComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
