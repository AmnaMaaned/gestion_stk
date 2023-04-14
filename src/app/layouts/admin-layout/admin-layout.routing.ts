import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { VentesComponent } from '../../ventes/ventes.component';
import { TypographyComponent } from '../../typography/typography.component';

import { FournisseursComponent } from '../../fournisseurs/fournisseurs.component';
import { AchatsComponent } from '../../achats/achats.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ClientsComponent } from '../../clients/clients.component';
// import { StockComponent } from '../../stock/stock.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'ventes',     component: VentesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'clients',          component: ClientsComponent },
    { path: 'fournisseurs',           component: FournisseursComponent },
    { path: 'achats',  component: AchatsComponent },
    // { path: 'stock',  component: StockComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
