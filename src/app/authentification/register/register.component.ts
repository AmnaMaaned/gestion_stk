import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { User } from '../../Model/user';
import { Router } from '@angular/router';
@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})
export class RegisterComponent {
user:User=new User()
constructor(private userServ:UserService,private router:Router){}
signUp=()=>{
this.userServ.register(this.user).subscribe((data=>this.router.navigate(
['/login'])))
}
}