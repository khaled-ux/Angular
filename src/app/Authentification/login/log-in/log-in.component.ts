import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
 
    username: any ;
    password: any ;
    
  
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
 
  constructor(private loginService: LoginService,private router: Router) { }
  ngOnInit(): void {
   
  }
   
loginProcess(f: any){
  this.loginService.login(this.username, this.password).subscribe(
    result=> {
    if(result.token!=null){
      sessionStorage.setItem('id',result.id);
      sessionStorage.setItem('username',result.username);
      sessionStorage.setItem('email',result.email);
      sessionStorage.setItem('token',result.token);
      sessionStorage.setItem('role',result.role);
      if(result.role=='User'){
        this.router.navigate(['/started']);
      }else if(result.role.includes('Admin')){
        this.router.navigate(['/board-admin']);
      }
     else{
      this.router.navigate(['/notfound']);
     }
    }
  
  },(err )=>{
    alert('Wrong credentials')}
  );
}

}
