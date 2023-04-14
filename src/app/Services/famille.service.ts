import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Famille} from  '../Model/famille';
@Injectable({
  providedIn: 'root'
})
export class FamilleService {
  baseurl="http://localhost:3000/api/familles";
  constructor() { }
}
