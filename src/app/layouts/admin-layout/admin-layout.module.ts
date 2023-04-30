import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { VentesComponent } from '../../ventes/ventes.component';
import { StatistiquesComponent } from '../../statistiques/statistiques.component';
import { ClientsComponent } from '../../clients/clients.component';
 import { StockComponent } from '../../stock/stock.component';
import { FournisseursComponent } from '../../fournisseurs/fournisseurs.component';
import { AchatsComponent } from '../../achats/achats.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { AjoutarticleComponent } from '../../stock/ajoutarticle/ajoutarticle.component';
import { AjoutfournisseurComponent } from '../../fournisseurs/ajoutfournisseur/ajoutfournisseur.component';
import { ModiffournisseurComponent } from '../../fournisseurs/modiffournisseur/modiffournisseur.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    VentesComponent,
    UpgradeComponent,
    StatistiquesComponent,
    ClientsComponent,
    FournisseursComponent,
    AchatsComponent,
    StockComponent,
    LoginComponent,
    RegisterComponent,
    AjoutarticleComponent,
    AjoutfournisseurComponent,
    ModiffournisseurComponent,
 
    
  ]
})

export class AdminLayoutModule {}
