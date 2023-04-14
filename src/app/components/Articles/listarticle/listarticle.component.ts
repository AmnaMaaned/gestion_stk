import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../Services/article.service';
import { Article } from '../../../Model/article';
@Component({
selector: 'app-listarticle',
templateUrl: './listarticle.component.html',
styleUrls: ['./listarticle.component.css']
})
export class ListarticleComponent implements OnInit {
constructor(private artserv:ArticleService) { }
articles:Article[];
ngOnInit(): void {
this.loadArticles();
}
loadArticles () {
return this.artserv.ListArticles().subscribe(data =>
this.articles = data),

(err:any)=>console.log(err)
}

Deletearticle(id:object){
return this.artserv.DeleteArticle(id).subscribe(data=>{this.loadArticles()});

}

}