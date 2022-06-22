import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  firstName:any
  lastName:any
  email:any

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
  }
  save(f: any){
    console.log(f.value);
 this.userService.createUser(f.value).subscribe(
   response => {
    console.log(response);
   this.router.navigate(['/user']);
  })
}
}
