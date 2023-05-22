import { Component, OnInit } from '@angular/core';
import { VenteService } from '../Services/vente.service';
import { ArticleService } from '../Services/article.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'vente-bans-devis',
  templateUrl: './vente-bans-devis.component.html',
  styleUrls: ['./vente-bans-devis.component.css']
})
export class VenteBansDevisComponent implements OnInit {
  //rows: { datevente: string; totalvente: Number; quantite: Number ; prix_vente_article: Number ; tva_article: Number;TVA_vente: Number  ;enLigne: string }[] = [];
 rows = [
  { datevente: 'Valeur 1', totalvente: 3000, quantite: 5 , prix_vente_article: 4000, tva_article :30, TVA_vente:50 , enLigne: 'Oui'}  ,
//   { datevente: 'Valeur 4', totalvente: 'Valeur 5', qunatite: 'Valeur 6' ,  prix_vente_article: 'Valeur 3' ,tva_article: 'Valeur 1', TVA_vente: 'Valeur 2', enLigne: 'Valeur 3'   },
 ];
  
  addChildRow() {
  this.rows.push({ datevente: 'Valeur 2', totalvente: 3000, quantite: 5 , prix_vente_article: 4000, tva_article :30, TVA_vente:50 , enLigne: 'Oui'});
  }
  
  onRowsChange(rows: { datevente: string; totalvente: string; qunatite: string ;prix_vente_article : string ; tva_article: string; TVA_vente: string; enLigne: string }[]) {
  rows = rows;
  }

constructor(private venteservice : VenteService , private artservice : ArticleService) { }

ngOnInit(): void {
}


}
