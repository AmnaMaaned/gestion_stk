import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fournisseur } from '../../Model/fournisseur';
import { FournisseurService } from '../../Services/fournisseur.service';


@Component({
  selector: 'ajoutfournisseur',
  templateUrl: './ajoutfournisseur.component.html',
  styleUrls: ['./ajoutfournisseur.component.css']
})
export class AjoutfournisseurComponent implements OnInit {

  origin = '';
  constructor(private fourserv: FournisseurService ,private router:Router,  private activatedRoute: ActivatedRoute) { }
  nouvfournisseur:  Fournisseur = new Fournisseur();
  
  ngOnInit(): void {
    this.activatedRoute.data.subscribe( data => {this.origin = data['origin'];
    });
  }

  ajoutfournisseur(){
    console.log(this.nouvfournisseur);
    this.fourserv.AddFournisseur(this.nouvfournisseur).subscribe
    (data=>this.router.navigate(['/listfournisseur']),err=>console.log(err))
    
    }


  cancelClick(): void {
    this.router.navigate(['fournisseurs']);
  }

}
