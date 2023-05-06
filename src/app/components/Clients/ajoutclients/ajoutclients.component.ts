// import { Component, OnInit } from '@angular/core';
// import { Client } from '../../Model/client';
// import { ClientService } from '../../Services/client.service';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'ajoutclients',
//   templateUrl: './ajoutclients.component.html',
//   styleUrls: ['./ajoutclients.component.css']
// })
// export class AjoutclientsComponent implements OnInit {

//   origin = '';
//   constructor(private cltserv: ClientService ,private router:Router,  private activatedRoute: ActivatedRoute) { }
//   nouvclient:  Client = new Client();
  
//   ngOnInit(): void {
//     this.activatedRoute.data.subscribe( data => {this.origin = data['origin'];
//     });
//   }

//   ajoutarticle(){
//     console.log(this.nouvclient);
//     this.cltserv.AddClient(this.nouvclient).subscribe
//     (data=>this.router.navigate(['/listclient']))
//     }
   

//   onFileChanged(event:any) {
//     this.nouvarticle.image_article="images/articles/"+event.target.files[0]
//     .nameconsole.log(this.nouvarticle.image_article);
//   }


//   cancelClick(): void {
//     this.router.navigate(['ajoutarticle']);
//   }

// }

