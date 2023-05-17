import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lignevente } from '../Model/lignevente';

@Injectable({
  providedIn: 'root'
})
export class LigneventeService {

 
  baseurl="http://localhost:8000/api/ligneventes";

  constructor(private http:HttpClient) { }
  ListLigneventes():Observable<Lignevente[]>
  {
  return this.http.get<Lignevente[]>(this.baseurl);
  }
  
  AddLignevente =(Lv: Lignevente ):Observable<Lignevente>=>
  {
      
      // console.log("nouvel article",art);
  return this.http.post<Lignevente>(this.baseurl,Lv)
  }
  
  GetLignevente(id:object):Observable<Lignevente>
  {
  return this.http.get<Lignevente>(this.baseurl+ '/' + id);
  }

  
  UpdateLignevente(id:object,Lv:Lignevente): Observable<Lignevente>
  {
  return this.http.put<Lignevente>(this.baseurl + '/' + id,Lv);
  }
  DeleteLignevente(id:object):Observable<Lignevente>
  {
  return this.http.delete<Lignevente>(this.baseurl + '/' + id);
  }
  }