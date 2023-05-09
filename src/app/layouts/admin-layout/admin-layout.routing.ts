import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { VentesComponent } from '../../ventes/ventes.component';
import { StatistiquesComponent } from '../../statistiques/statistiques.component';

import { FournisseursComponent } from '../../fournisseurs/fournisseurs.component';
import { AchatsComponent } from '../../achats/achats.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ClientsComponent } from '../../clients/clients.component';
import { StockComponent } from '../../stock/stock.component';
import { ListarticleComponent } from '../../components/Articles/listarticle/listarticle.component';

import { AjoutarticleComponent } from '../../stock/ajoutarticle/ajoutarticle.component';
import { ListefamilleComponent } from '../../stock/listefamille/listefamille.component';
import { ModifarticleComponent } from '../../stock/modifarticle/modifarticle.component';
import { AjoutfournisseurComponent } from '../../fournisseurs/ajoutfournisseur/ajoutfournisseur.component';
import { ModiffournisseurComponent } from '../../fournisseurs/modiffournisseur/modiffournisseur.component';
import { LoginComponent } from '../../authentification/login/login.component';
import { AjoutclientsComponent } from '../../clients/ajoutclients/ajoutclients.component';
import { ModifclientsComponent } from '../../clients/modifclients/modifclients.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'ventes',     component: VentesComponent },
    { path: 'statistiques',     component: StatistiquesComponent },
    { path: 'clients',          component: ClientsComponent },
    { path: 'fournisseurs',           component: FournisseursComponent },
    { path: 'achats',  component: AchatsComponent },
     { path: 'stock',  component: StockComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    // {path:"stock",component: StockComponent,canActivate:[AuthguardGuard] },
    {path:'listarticles', component :ListarticleComponent},
    {path:'login', component :LoginComponent},
    {path:'ajoutarticle', component :AjoutarticleComponent},
    {path:'Listefamille', component :ListefamilleComponent},
    {path:'modifarticle',component : ModifarticleComponent},
    {path:'ajoutfournisseur',component : AjoutfournisseurComponent},
    {path:'modiffournisseur',component : ModiffournisseurComponent},
     {path:'ajoutclient',component : AjoutclientsComponent},
     {path:'modifclient',component : ModifclientsComponent},
     {path:'listefamille',component : ListefamilleComponent},
     
     
    

];
