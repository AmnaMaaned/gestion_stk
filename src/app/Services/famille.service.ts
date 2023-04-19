import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Famille } from '../Model/famille';
@Injectable({
  providedIn: 'root'
})
export class FamilleService {
  baseurl="http://localhost:8000/api/familles";
  constructor(private http:HttpClient) { }
  ListFamilles():Observable<Famille[]>
  {
  return this.http.get<Famille[]>(this.baseurl);
  }
  AddFamille (f: Famille ):Observable<Famille>
  {
  return this.http.post<Famille>(this.baseurl,f)
  }
  GetFamille(id:object):Observable<Famille>
  {
  return this.http.get<Famille>(this.baseurl+ '/' + id);
  }
  UpdateFamille(id:object,f:Famille): Observable<Famille>
  {
  return this.http.put<Famille>(this.baseurl + '/' + id,f);
  }
  DeleteFamille(id:object):Observable<Famille>
  {
  return this.http.delete<Famille>(this.baseurl + '/' + id);
  }
  }