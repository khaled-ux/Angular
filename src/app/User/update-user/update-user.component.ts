import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id: any
  firstName: any;
  lastName: any;
  email: any;
  constructor(private router:Router,
     private route: ActivatedRoute
     ,private userService :UserService) { }

  ngOnInit(): void {
    this.getUser(this.route.snapshot.paramMap.get('id'));
    
  }
  getUser(id:any): void {
    this.userService.getUserById(id)
      .subscribe(
        data => {
          this.id = data.id;
           this.firstName = data.firstName;
           this.lastName=data.lastName;
           this.email = data.email;
        },
      
      );
   
  }
  Update(f:any){

     this.userService.update(this.id,this.firstName,this.lastName,this.email).subscribe(
       response => {
       console.log(response);
       this.router.navigate(['/user']);
        }
   );
  
  }

}
