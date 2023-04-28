import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../Model/article';
import { ArticleService } from '../../Services/article.service';

@Component({
  selector: 'modifarticle',
  templateUrl: './modifarticle.component.html',
  styleUrls: ['./modifarticle.component.css']
})
export class ModifarticleComponent implements OnInit {
  art: Article = new Article();
  id:object;
  constructor(private artserv:  ArticleService ,private router:Router,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['_id'];
 
   this.artserv.GetArticle(this.id).subscribe(data=>this.art=data);
  }
  modiferarticle(){
  this.artserv.UpdateArticle(this.id,this.art).subscribe(data=>this.router.
  navigate(['/articles/listarticles']))
}

onFileChanged(event:any) {
  this.art.imagearticle="images/articles/"+event.target.files[0]
  .nameconsole.log(this.art.imagearticle);
}
}
