import { Component, OnInit } from '@angular/core';
import { VenteService } from '../Services/vente.service';
import { ArticleService } from '../Services/article.service';

@Component({
  selector: 'vente-factures',
  templateUrl: './vente-factures.component.html',
  styleUrls: ['./vente-factures.component.css']
})
export class VenteFacturesComponent implements OnInit {

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
