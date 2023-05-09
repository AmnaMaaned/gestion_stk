import { Component, OnInit } from '@angular/core';
import { FournisseurService } from '../Services/fournisseur.service';
import { Fournisseur } from '../Model/fournisseur';

@Component({
  selector: 'app-maps',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {
    constructor(private frserv:FournisseurService) { }
    fournisseurs:Fournisseur[];
    ngOnInit(): void {
    this.loadFourniseurs();
    }
  
  
  loadFourniseurs () {
    return this.frserv.ListFournisseurs().subscribe(data =>this.fournisseurs = data),(err:any)=>console.log(err)
    }
    
    Deletefournisseur(id:object){
    return this.frserv.DeleteFournisseur(id).subscribe(data=>{this.loadFourniseurs()});
    
    }
    
    }