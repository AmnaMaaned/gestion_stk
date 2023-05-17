import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from '../Model/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  baseurl="http://localhost:8000/api/factures";

  
  constructor(private http:HttpClient) { }


  ListFactures():Observable<Facture[]>
  {
  return this.http.get<Facture[]>(this.baseurl);
   }
    AddFacture (f: Facture ):Observable<Facture>
  {
  return this.http.post<Facture>(this.baseurl,f)
  }  
  GetFacture(id:object):Observable<Facture>
  {
  return this.http.get<Facture>(this.baseurl+ '/' + id);
  }
  UpdateFacture(id:object,f:Facture): Observable<Facture>
  {
  return this.http.put<Facture>(this.baseurl + '/' + id,f);
  }
  DeleteFacture(id:object):Observable<Facture>
  {
  return this.http.delete<Facture>(this.baseurl + '/' + id);
  }
  }
