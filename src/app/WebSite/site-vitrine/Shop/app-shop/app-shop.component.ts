import { Component, OnInit } from '@angular/core';
import { ParametreService } from '../../parametre.service';

@Component({
  selector: 'app-app-shop',
  templateUrl: './app-shop.component.html',
  styleUrls: ['./app-shop.component.css']
})
export class AppShopComponent implements OnInit {
items:any;
IdUser:any;
test='<h3><font face=\"Calibri\" size=\"5\" color=\"#801919\"><b>mekrza</b></font></h3>';
  constructor(private parmetre:ParametreService) { }

  ngOnInit(): void {
    this.IdUser=sessionStorage.getItem('id');
    this. getAllItem(this.IdUser);
  }
  getAllItem(IdUser:any){
    this.parmetre.getAllItem(IdUser)
    .subscribe(
      data => {
        this.items= data;
      console.log(this.items);
      },
    );

  }

}
