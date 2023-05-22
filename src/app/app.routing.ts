import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ListarticleComponent } from './components/Articles/listarticle/listarticle.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { VenteComptoireComponent } from './vente-comptoire/vente-comptoire.component';
import { VenteAvoirComponent } from './vente-avoir/vente-avoir.component';
import { VenteBansLivraisonComponent } from './vente-bans-livraison/vente-bans-livraison.component';
import { VenteBansDevisComponent } from './vente-bans-devis/vente-bans-devis.component';
import { VenteBansCommandeComponent } from './vente-bans-commande/vente-bans-commande.component';
import { VenteFacturesComponent } from './vente-factures/vente-factures.component';
import { TabFactureComponent } from './venteComptoire/tab-facture/tab-facture.component';
import { VentesComponent } from './ventes/ventes.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
   {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x=>x.AdminLayoutModule)
  }]},


  {path:'ventes' , component : VentesComponent } ,
    {path:"register",component:RegisterComponent},
    {path:"VenteComptoire",component:VenteComptoireComponent},
    {path:"VenteAvoir",component:VenteAvoirComponent },
    {path:"VenteBansLivraison",component:VenteBansLivraisonComponent },
    {path:"VenteBansDevis",component:VenteBansDevisComponent },
    {path:"VenteBansCommande",component:VenteBansCommandeComponent },
    {path:"VenteFactures",component:VenteFacturesComponent },
    {path: "TabFactureComponent" , component :TabFactureComponent}
  ,

   {
    path: '**',
    redirectTo: 'dashboard'
  },



];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
