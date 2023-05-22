import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tab-facture',
  templateUrl: './tab-facture.component.html',
  styleUrls: ['./tab-facture.component.css']
})
export class TabFactureComponent implements OnInit {
  facture : boolean = true ;
  @Input() rows: { col1: number; col2: string; col3: number ; col4: string}[] = [];
  @Output() rowsChange = new EventEmitter<{ col1: number; col2: string; col3: number  ;col4: string}[]>();
  constructor( ) { }
  // addRow() {
  //   this.venteservice.ListeFactures().subscribe(factures => {

  //     this.rows = factures.map(facture => {
  //       return {
  //         col1: facture.idFacture,
  //         col2: facture.dateFacture,
  //         col3: facture.montantTotal,
          
  //       };
  //     });
  //     this.rowsChange.emit(this.rows);
  //   });
  // }


    /////////
    doPost(){

    }

  ngOnInit(): void {
  }

}
