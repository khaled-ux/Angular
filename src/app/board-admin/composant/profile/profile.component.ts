import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../User/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Id: any;
  Username:any;
  Email :any;
  roles: any ;
  isrole : any
  role : any;
  constructor() { }

  ngOnInit(): void {
   // this.Id=sessionStorage.getItem('id');
    this.Username=sessionStorage.getItem('username');
    this.Email=sessionStorage.getItem('email');
    this.roles=sessionStorage.getItem('role');
    this.role=sessionStorage.getItem('role');
    if(this.role.includes('Admin')){
      this.isrole=true;
    }
  }
 
}