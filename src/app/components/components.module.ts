import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListarticleComponent } from './Articles/listarticle/listarticle.component';
import { AjoutarticleComponent } from './Articles/ajoutarticle/ajoutarticle.component';
import { AjoutfamilleComponent } from './Familles/ajoutfamille/ajoutfamille.component';
import { ListefamilleComponent } from './Familles/listefamille/listefamille.component';
import { ListeclientsComponent } from './Clients/listeclients/listeclients.component';
import { AjoutclientsComponent } from './Clients/ajoutclients/ajoutclients.component';
import { ModifclientsComponent } from './Clients/modifclients/modifclients.component';
import { ModifarticleComponent } from './Articles/modifarticle/modifarticle.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ListarticleComponent,
    AjoutarticleComponent,
    AjoutfamilleComponent,
    ListefamilleComponent,
    ListeclientsComponent,
    AjoutclientsComponent,
    ModifclientsComponent,
    ModifarticleComponent
   
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
