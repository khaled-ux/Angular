import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isrole : any
  role : any;
  @Output() public sidenavToggle = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.role=sessionStorage.getItem('role');
    if(this.role.includes('Admin')){
      this.isrole=true;
    }
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  logout(){
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');
    this.router.navigate(['/login']);
    window.location.reload();
      }
}
