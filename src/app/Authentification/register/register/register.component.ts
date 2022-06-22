import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstname:any;
  lastname:any;
  username: any ;
  email:any ;
  password: any ;
  ToEmail:any="mekk918@gmail.com";
  Subject:any;
  Body:any;


  
  constructor(private registerService:RegisterService,
    private router: Router,
    private http: HttpClient) { }
  ngOnInit() {
  }
    
register(f: any){
  this.registerService.register(this.firstname,this.lastname,this.username,this.email, this.password)
  .subscribe(result=> {
    if(result.success)
    { 
      console.log(result);
     
      alert(result.message);
      this.router.navigate(['/login']);
    }
    else
    { 
      console.log(result);
      alert(result.message);
    }
  });
  this.registerService.sendEmail(this.username,this.email)  .subscribe(result=> {
    if(result.success)
    { 
      console.log(result);
    
    }
    
  });
}



}