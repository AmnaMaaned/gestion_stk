import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table'
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ModifarticleComponent } from './stock/modifarticle/modifarticle.component';
import { ErrorPageComponent } from './Error-page/error-page/error-page.component';
import { RegisterComponent } from './authentification/register/register.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {  ReactiveFormsModule } from '@angular/forms';
import { VenteComptoireComponent } from './vente-comptoire/vente-comptoire.component';
import { VenteAvoirComponent } from './vente-avoir/vente-avoir.component';
import { VenteFacturesComponent } from './vente-factures/vente-factures.component';
import { VenteBansLivraisonComponent } from './vente-bans-livraison/vente-bans-livraison.component';
import { VenteBansCommandeComponent } from './vente-bans-commande/vente-bans-commande.component';
import { VenteBansDevisComponent } from './vente-bans-devis/vente-bans-devis.component';
import { TabComponent } from './tab/tab.component';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TabFactureComponent } from './venteComptoire/tab-facture/tab-facture.component';
import { VenteService } from './Services/vente.service';
import { LigneventeComponent } from './Modul/lignevente/lignevente.component';
// import { LoginComponent } from './authentification/login/login.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    MatIconModule ,
    ReactiveFormsModule ,
    MatInputModule ,
    MatFormFieldModule ,
    MatToolbarModule ,
    MatTableModule ,
    MatListModule ,
    MatAutocompleteModule ,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,

    AdminLayoutComponent,
    ModifarticleComponent,
    ErrorPageComponent,
    RegisterComponent,
    VenteComptoireComponent,
    VenteAvoirComponent,
    VenteFacturesComponent,
    VenteBansLivraisonComponent,
    VenteBansCommandeComponent,
    VenteBansDevisComponent,
    TabComponent,
    TabFactureComponent,
    LigneventeComponent,
    // LoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
