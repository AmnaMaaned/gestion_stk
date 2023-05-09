import { Component, OnInit } from '@angular/core';

import { ClientService } from '../../Services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../Model/client';
@Component({
  selector: 'modifclients',
  templateUrl: './modifclients.component.html',
  styleUrls: ['./modifclients.component.css']
})
export class ModifclientsComponent implements OnInit {
 clt: Client = new Client();
  id:object;
  constructor(private clserv: ClientService ,private router:Router,private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['_id'];
 
   this.clserv.GetClient(this.id).subscribe(data=>this.clt=data);
  }
  modifierclient(){
  this.clserv.UpdateClient(this.id,this.clt).subscribe(data=>this.router. navigate(['/clients/listclients']))
 
}

}
