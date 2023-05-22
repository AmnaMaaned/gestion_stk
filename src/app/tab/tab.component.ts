import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() rows: { datevente: string; totalvente: Number; quantite: Number ; prix_vente_article: Number ; tva_article: Number;TVA_vente: Number  ;enLigne: string }[] = [];
@Output() rowsChange = new EventEmitter<{ datevente: string; totalvente: Number; quantite: Number ; prix_vente_article: Number; tva_article: Number ; TVA_vente: Number;enLigne: string  }[]>();

addRow() {
this.rows.push({ datevente: 'Valeur 1', totalvente: 3000, quantite: 5 , prix_vente_article: 4000, tva_article :30, TVA_vente:50 , enLigne: 'Oui' });
this.rowsChange.emit(this.rows);
}

}
