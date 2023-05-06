// import { Component, OnInit } from '@angular/core';
// import { Client } from '../../Model/client';
// import { ClientService } from '../../Services/client.service';


// @Component({
//   selector: 'listeclients',
//   templateUrl: './listeclients.component.html',
//   styleUrls: ['./listeclients.component.css']
// })
// export class ListeclientsComponent implements OnInit {
//   constructor(private cltserv:ClientService) { }
//   clients:Client[];
//   ngOnInit(): void {
//   this.loadClients();
//   }
//   loadClients () {
//   return this.cltserv.ListArticles().subscribe(data => this.clients = data),
  
//   (err:any)=>console.log(err)
//   }
  
//   Deleteclient(id:object){
//   return this.cltserv.DeleteClient(id).subscribe(data=>{this.loadClients()});
  
//   }
  
//   }