
import { Component, OnInit } from '@angular/core';

import { ParametreService } from 'src/app/WebSite/site-vitrine/parametre.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  items:any;
  IdUser:any;
  nom:any;
  phone:any;
  email:any;
  adresse:any;
  telephone:any;
  description:any;
  dateOuverture:any;
  lienFacebook:any;
  lienLinkedin :any;
  lienInstagram :any;
  Theme: any ;
  pathImage='assets/images/produits/';
  body='Bienvenue'
  constructor(private parmetre:ParametreService) { }

 
  ngOnInit(): void {
    this.IdUser=sessionStorage.getItem('id');
    this. getAllItem(this.IdUser);
 
    
  }
  
 getParametre(IdUser:any): void {
  this.parmetre.getParametreByIdUser(IdUser)
    .subscribe(
      data => {
  console.log(data);
        this.nom= data.nom;
        this.phone = data.telephone;
         this.email = data.email;
         this.adresse=data.adresse;
         this.telephone=data.telephone;
         this.description=data.description;
         this.dateOuverture=data.dateOuverture;
         this.lienFacebook=data.lienFacebook;
         this.lienInstagram=data.lienInstagram;
         this.lienLinkedin=data.lienLinkedin;
         this.Theme=data.theme;
        
      },
    );
}
  getAllItem(IdUser:any){
    this.parmetre.getAllItem(IdUser)
    .subscribe(
      data => {
        this.items= data;
      console.log(this.items);
      this.items.forEach((e: { pathImage: string; }) => {
        console.log( this.pathImage);
        this.pathImage= 'assets/images/produits/'+ e.pathImage;
     });
      console.log( this.pathImage);
      },
      
    );
  
  }
 

}
