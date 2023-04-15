import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Article} from '../Model/article';
@Injectable({
providedIn: 'root'
})
export class ArticleService {
baseurl="http://localhost:8000/api/articles";
constructor(private http:HttpClient) { }
ListArticles():Observable<Article[]>
{
return this.http.get<Article[]>(this.baseurl);
}
AddArticle (art: Article ):Observable<Article>
{
return this.http.post<Article>(this.baseurl,art)
}
GetArticle(id:object):Observable<Article>
{
return this.http.get<Article>(this.baseurl+ '/' + id);
}
UpdateArticle(id:object,art:Article): Observable<Article>
{
return this.http.put<Article>(this.baseurl + '/' + id,art);
}
DeleteArticle(id:object):Observable<Article>
{
return this.http.delete<Article>(this.baseurl + '/' + id);
}
}