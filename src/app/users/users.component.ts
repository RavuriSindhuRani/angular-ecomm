import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  constructor(private u:UserService){}
  users:any;
  ngOnInit(){
    this.u.getUsers().subscribe((res)=>{
      this.users=res;

    })
  }


}
