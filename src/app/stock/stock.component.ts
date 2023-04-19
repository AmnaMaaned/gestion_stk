import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ArticleService } from '../Services/article.service';
import { Article } from '../Model/article';

@Component({
  selector: 'app-notifications',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
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