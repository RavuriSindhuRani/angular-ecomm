import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private bs:Router){}
  logoutuser(){
    this.username=localStorage.removeItem("userloggedin")
  }
  username:any;
  ngOnInit(){
    if(localStorage.getItem("userloggedin")){
      this.username=localStorage.getItem("userloggedin")
    }
    else{
      this.bs.navigateByUrl("/")
    }
  }
  

}
