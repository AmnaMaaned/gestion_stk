import { Injectable } from '@angular/core';
import { Fournisseur } from '../Model/fournisseur';
import { HttpClient } from '@angular/common/http';
import { Observable, fromEvent } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  baseurl="http://localhost:8000/api/fournisseurs";
  constructor(private http:HttpClient) { }
  ListFournisseurs():Observable<Fournisseur[]>
  {
  return this.http.get<Fournisseur[]>(this.baseurl);
  }
  AddFournisseur (fr: Fournisseur ):Observable<Fournisseur>
  {
    return this.http.post<Fournisseur>(this.baseurl,fr)
  }
  GetFournisseur(id:object):Observable<Fournisseur>
  {
  return this.http.get<Fournisseur>(this.baseurl+ '/' + id);
  }
  UpdateFournisseur(id:object,fr:Fournisseur): Observable<Fournisseur>
  {
  return this.http.put<Fournisseur>(this.baseurl + '/' + id,fr);
  }
  DeleteFournisseur(id:object):Observable<Fournisseur>
  {
  return this.http.delete<Fournisseur>(this.baseurl + '/' + id);
  }
  }