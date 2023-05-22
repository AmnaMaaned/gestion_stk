import { Component, OnInit } from '@angular/core';
import { Client } from '../../Model/client';
import { ClientService } from '../../Services/client.service';
import { Router ,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ajoutclients',
  templateUrl: './ajoutclients.component.html',
  styleUrls: ['./ajoutclients.component.css']
})
export class AjoutclientsComponent implements OnInit {
 
 
 origin = '';
  constructor(private cltserv: ClientService ,private router:Router,  private activatedRoute: ActivatedRoute) { }
  nouvclient:  Client = new Client();
  
  ngOnInit(): void {
    this.activatedRoute.data.subscribe( data => {this.origin = data['origin'];
    });
  }

  ajoutclient(){
    console.log(this.nouvclient);
    this.cltserv.AddClient(this.nouvclient).subscribe
    (data=>this.router.navigate(['/clients']))
    }

 


  cancelClick(): void {
    this.router.navigate(['clients']);
  } 
  // goTOList(){
  //   this.router.navigate(['/dispaly-product']);
  // }
}

