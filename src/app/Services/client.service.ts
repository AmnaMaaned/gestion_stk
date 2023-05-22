import { Injectable } from '@angular/core';
import { Client } from '../Model/client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseurl="http://localhost:8000/api/clients";
          
// url2="http://localhost://8000/api/clients/:id";
  
  constructor(private http:HttpClient) { }


  ListClients():Observable<Client[]>
  {
  return this.http.get<Client[]>(this.baseurl);
   }
    AddClient (cl: Client ):Observable<Client>
  {
  return this.http.post<Client>(this.baseurl,cl)
  }  
  GetClient(id:object):Observable<Client>
  {
  return this.http.get<Client>(this.baseurl+ '/' + id);
  }
  UpdateClient(id:object,cl:Client): Observable<Client>
  {
  return this.http.put<Client>(this.baseurl + '/' + id,cl);
  }
  DeleteClient(id:object):Observable<Client>
  {
  return this.http.delete<Client>(this.baseurl + '/' + id);
  }
  }