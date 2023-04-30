import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FournisseurService } from '../../Services/fournisseur.service';
import { Fournisseur } from '../../Model/fournisseur';

@Component({
  selector: 'modiffournisseur',
  templateUrl: './modiffournisseur.component.html',
  styleUrls: ['./modiffournisseur.component.css']
})
export class ModiffournisseurComponent implements OnInit {
  f: Fournisseur = new Fournisseur();
  id:object;
  constructor(private fourserv:  FournisseurService ,private router:Router,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['_id'];
 
   this.fourserv.GetFournisseur(this.id).subscribe(data=>this.f=data);
  }
  modifierfournisseur(){
  this.fourserv.UpdateFournisseur(this.id,this.f).subscribe(data=>this.router.
  navigate(['/fournisseurs/listfournisseurs']))
}

}
