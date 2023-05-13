import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../Model/article';
import { ArticleService } from '../../Services/article.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'ajoutarticle',
  templateUrl: './ajoutarticle.component.html',
  styleUrls: ['./ajoutarticle.component.css']
})
export class AjoutarticleComponent implements OnInit {

  imagePreview: any;
  origin = '';
  
  constructor(private artserv: ArticleService ,private router:Router,  private activatedRoute: ActivatedRoute) { }
  nouvarticle:  Article = new Article();
  
  ngOnInit(): void {
    this.activatedRoute.data.subscribe( data => {this.origin = data['origin'];
    });
  }

  ajoutarticle(){
    console.log(this.nouvarticle);
    this.artserv.AddArticle(this.nouvarticle).subscribe
    (data=>this.router.navigate(['/stock']))
    }


    // onImageSelected(event: Event) {
    //   const file = (event.target as HTMLInputElement).files[0];
    //   console.log("here file", file);
  
    //   this.nouvarticle.patchValue({ img: file });
    //   this.nouvarticle.updateValueAndValidity();
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     this.imagePreview = reader.result as string
    //   };
    //   reader.readAsDataURL(file);
    // }

  onFileChanged(event:any) {
    this.nouvarticle.image_article="images/articles/"+event.target.files[0].nameconsole.log(this.nouvarticle.image_article);
  }
  
cancelClick(): void {
    this.router.navigate(['ajoutarticle']);
  }

}
