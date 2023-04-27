import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'ajoutarticle',
  templateUrl: './ajoutarticle.component.html',
  styleUrls: ['./ajoutarticle.component.css']
})
export class AjoutarticleComponent implements OnInit {

  origin = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe( data => {this.origin = data['origin'];
    });
  }

  cancelClick(): void {
    this.router.navigate(['articles']);
  }

}
