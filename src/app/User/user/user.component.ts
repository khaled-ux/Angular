import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 Users : any 
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.GetUsers();
  }
  GetUsers(): void {
    this.userService.getAll().subscribe((data:any)=>{
      this.Users=data;
      console.log(this.Users)
    });
     
}



onDelete(id:any){
  console.log(id);
  this.userService.delete(id).subscribe(
    response => {
      console.log(response);
       })
  }
  onUpdate(id:any){
    console.log(id);
    this.router.navigate(['user/update/'+id]);
  }

}