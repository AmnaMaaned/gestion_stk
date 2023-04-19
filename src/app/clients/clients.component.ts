import { Component, OnInit } from '@angular/core';
import { Client } from '../Model/client';
import { ClientService } from '../Services/client.service';

@Component({
  selector: 'app-icons',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  constructor(private clserv:ClientService) { }
  clients:Client[];
  ngOnInit(): void {
  this.loadClients();
  }


  loadClients () {
  return this.clserv.ListClients().subscribe(data =>
  this.clients = data),
  
  (err:any)=>console.log(err)
  }
  
  Deleteclient(id:object){
  return this.clserv.DeleteClient(id).subscribe(data=>{this.loadClients()});
  
  }
  
  }