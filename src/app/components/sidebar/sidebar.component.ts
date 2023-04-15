import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'users_single-02', class: '' },
    { path: '/clients', title: 'Clients',  icon:'education_atom', class: '' },
    { path: '/fournisseurs', title: 'Fournisseurs',  icon:'location_map-big', class: '' },
    { path: '/stock', title: 'Stock',  icon:'ui-1_bell-53', class: '' },
    { path: '/achats', title: 'Achats',  icon:'ui-1_bell-53', class: '' },
   
   
    { path: '/ventes', title: 'Ventes',  icon:'design_bullet-list-67', class: '' },
    { path: '/statistiques', title: 'Statistiques',  icon:'text_caps-small', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'objects_spaceship', class: 'active active-pro' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
