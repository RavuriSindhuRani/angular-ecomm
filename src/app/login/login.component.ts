import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:any;
  pwd:any;
  reqpwd:any;
  constructor(private bs:Router){}

  checkLogin(){
    this.reqpwd = this.username.slice(0,3)+"123"
    if(this.pwd == this.reqpwd){
      alert("Login Success")
      localStorage.setItem("userloggedin",this.username)
      this.bs.navigateByUrl("/users/products")
    }
    else{
      alert("Password or Email Not Correct")
    }
  }

}
