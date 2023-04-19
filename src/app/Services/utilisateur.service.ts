import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../Model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  baseurl="http://localhost:8000/api/utilisateurs";
  constructor(private http:HttpClient) { }
  ListUtilisateurs():Observable<Utilisateur[]>
  {
  return this.http.get<Utilisateur[]>(this.baseurl);
  }
  AddUtilisateur (ut: Utilisateur ):Observable<Utilisateur>
  {

  return this.http.post<Utilisateur>(this.baseurl,ut)
  }
  GetUtilisateur(id:object):Observable<Utilisateur>
  {
  return this.http.get<Utilisateur>(this.baseurl+ '/' + id);
  }
  UpdateUtilisateur(id:object,ut:Utilisateur): Observable<Utilisateur>
  {
  return this.http.put<Utilisateur>(this.baseurl + '/' + id,ut);
  }
  DeleteUtilisateur(id:object):Observable<Utilisateur>
  {
  return this.http.delete<Utilisateur>(this.baseurl + '/' + id);
  }
  }
