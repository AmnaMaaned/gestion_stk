import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vente } from '../Model/vente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VenteService {

  baseurl="http://localhost:8000/api/ventes";

  constructor(private http:HttpClient) { }
  ListVentes():Observable<Vente[]>
  {
  return this.http.get<Vente[]>(this.baseurl);
  }
  
  
  AddVente =(ven: Vente ):Observable<Vente>=>
  {
      
      // console.log("nouvel article",art);
  return this.http.post<Vente>(this.baseurl,ven)
  }
  
  GetVente(id:object):Observable<Vente>
  {
  return this.http.get<Vente>(this.baseurl+ '/' + id);
  }

  
  UpdateVente(id:object,ven:Vente): Observable<Vente>
  {
  return this.http.put<Vente>(this.baseurl + '/' + id,ven);
  }
  DeleteVente(id:object):Observable<Vente>
  {
  return this.http.delete<Vente>(this.baseurl + '/' + id);
  }
  }