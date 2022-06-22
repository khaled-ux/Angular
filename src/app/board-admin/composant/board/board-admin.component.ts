import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
isrole : any
role : any;
@Output() public sidenavToggle = new EventEmitter();
  constructor(private router: Router) { }
  


  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  ngOnInit(): void {
    this.role=sessionStorage.getItem('role');
    if(this.role.includes('Admin')){
      this.isrole=true;
    }
   
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