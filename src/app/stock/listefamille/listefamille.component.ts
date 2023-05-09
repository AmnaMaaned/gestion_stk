import { Component, OnInit } from '@angular/core';
import { Famille } from '../../Model/famille';
import { FamilleService } from '../../Services/famille.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'listefamille',
  templateUrl: './listefamille.component.html',
  styleUrls: ['./listefamille.component.css']
})
export class ListefamilleComponent implements OnInit {
  constructor(private fmserv:FamilleService ,private router:Router,  private activatedRoute: ActivatedRoute) { }
  familles:Famille[];
  nouvfamille:  Famille = new Famille();
  ngOnInit(): void {
  this.loadFamilles();
  }

  ajoutfamille(){
    console.log(this.nouvfamille);
    this.fmserv.AddFamille(this.nouvfamille).subscribe
    (data=>this.router.navigate(['/']))
    }
  loadFamilles () {
  return this.fmserv.ListFamilles().subscribe(data =>this.familles = data),
  
  (err:any)=>console.log(err)
  }
  onFileChanged(event:any) {
    this.nouvfamille.imagefamille="images/articles/"+event.target.files[0]
    .nameconsole.log(this.nouvfamille.imagefamille);
  }


  Deletefamille(id:object){
  return this.fmserv.DeleteFamille(id).subscribe(data=>{this.loadFamilles()});
  
  }
  
  }