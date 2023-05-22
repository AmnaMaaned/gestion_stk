import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FactureService } from '../Services/facture.service';
import { VenteService } from '../Services/vente.service';
import { Vente } from '../Model/Vente';
import { Article } from '../Model/article';
import { ArticleService } from '../Services/article.service';

@Component({
  selector: 'app-vente-comptoire',
  templateUrl: './vente-comptoire.component.html',
  styleUrls: ['./vente-comptoire.component.css']
})
export class VenteComptoireComponent implements OnInit {
  formFacture: FormGroup;
  factures: any[] = [];
  montantTotal: Number = 0.0000;
  formSearsh: FormGroup;
  articles: Article[] = [];
  produits: string[] = [];
  prix: Number[]=[] ;
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private factureservice: FactureService ,
    private venteservice : VenteService ,
    private articleservice : ArticleService
  ) {
  
  }

  ngOnInit(): void {
    this.formFacture = this.formBuilder.group({
      name: ['', Validators.required],
      date_Facture: ['', Validators.required]
    });
    this.formSearsh = this.formBuilder.group({
      search: [''] // Ajoutez d'autres champs si nécessaire
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterOptions(value))
    );

    this.getListeVente();
  }

  private filterOptions(value: string): string[] {
    // Remplacez le tableau d'exemple par vos options réelles
    const options: string[] = [
      'Option 1',
      'Option 2',
      'Option 3',
      'Option 4',
      // ...
    ];

    const filteredOptions: string[] = options.filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );

    return filteredOptions;
  }

  addChildRow(): void {
    // Logique pour ajouter une nouvelle facture

    // Réinitialiser les champs du formulaire
    this.formFacture.reset();
  }

  valmontantTotal(): Number {
    return this.montantTotal;
  }

  submit(): void {
    if (this.formFacture.invalid) {
      return;
    }

    const factureData = this.formFacture.value;
    this.factures.push(factureData);
    this.formFacture.reset();
    this.factureservice.AddFacture(factureData).subscribe(
      response => {
        // Traitement en cas de succès de l'envoi de la facture
        console.log('Facture envoyée avec succès', response);
        // Réinitialiser le formulaire
        this.formFacture.reset();
      },
      error => {
        // Traitement en cas d'erreur lors de l'envoi de la facture
        console.error('Erreur lors de l\'envoi de la facture', error);
      }
    );
  }
  ////// Liste vente 
  getListeVente(): void {
    this.articleservice.ListArticles().subscribe(
      (article) => {
        this.articles = article;
        this.produits = this.addProduit(article);
        this.prix = this.addPrix(article);
        console.log(article);
        console.log(this.produits);
      },
      (error: any) => {
        console.error('Une erreur s\'est produite lors de la récupération des articles.', error);
      }
    );
  }
  /////////////////
///////////
  
  addProduit(vents: Article[]): string[] {
    const productNames: string[] = [];
    for (const vent of vents) {
      productNames.push(vent.designation_article.toString());
      console.log(vent.designation_article.toString() ,  'naderrrrrrrr');
    }
    return productNames;
  }
  ///////
  addPrix(vents: Article[]): Number[] {
    const productPrix: Number[] = [];
    for (const vent of vents) {
      productPrix.push(vent.prix_vente_article);
      console.log(vent.prix_vente_article ,  'naderrrrrrrr');
    }
    return productPrix;
  }
  ////////
 
  ///////////////imprimer 
  print() {
    const printContent = document.getElementById('printContent');
    if (printContent) {
      const printWindow = window.open('', '', 'height=500,width=500');
      printWindow?.document.write('<html><head><title>Impression</title></head><body>');
      printWindow?.document.write(printContent.innerHTML);
      printWindow?.document.write('</body></html>');
      printWindow?.document.close();
      printWindow?.print();
    }
  }
}
