import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../Model/article';
import { ArticleService } from '../../Services/article.service';
@Component({
  selector: 'ajoutarticle',
  templateUrl: './ajoutarticle.component.html',
  styleUrls: ['./ajoutarticle.component.css']
})
export class AjoutarticleComponent implements OnInit {

  origin = '';
  
  constructor(private artserv: ArticleService ,private router:Router,  private activatedRoute: ActivatedRoute) { }
  nouvarticle:  Article = new Article();
  
  ngOnInit(): void {
    this.activatedRoute.data.subscribe( data => {this.origin = data['origin'];
    });
  }

  ajoutarticle(){
    console.log(this.nouvarticle);
    this.artserv.AddArticle(this.nouvarticle).subscribe
    (data=>this.router.navigate(['/']))
    }
   

  onFileChanged(event:any) {
    this.nouvarticle.image_article="images/articles/"+event.target.files[0]
    .nameconsole.log(this.nouvarticle.image_article);
  }
  // onFileChanged(event:any) {
  //   console.log( event.target.files[0].name) ;
  //   this.cat.imagecategorie="categories/"+event.target.files[0].name
  //   }

  cancelClick(): void {
    this.router.navigate(['ajoutarticle']);
  }

}
