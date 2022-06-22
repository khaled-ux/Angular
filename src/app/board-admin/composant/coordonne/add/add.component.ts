import {Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoordonneService } from '../coordonne.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
 
  Nom:any;
  Email:any;
  Adresse:any ;
  Telephone: any ;

  constructor(private router:Router,private coordonneService:CoordonneService ) { }
  
  save(f: any){
    console.log(f.value);
 this.coordonneService.createCoordonne(f.value).subscribe(
   response => {
    console.log(response);
   this.router.navigate(['/coordonne']);
  })
}
}
