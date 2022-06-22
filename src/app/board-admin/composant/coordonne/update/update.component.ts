import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coordonne } from 'src/app/board-admin/models/coordonne.model';
import { CoordonneService } from '../coordonne.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:any
  nom:any;
  email:any;
  adresse:any ;
  telephone: any ;
  
 
  constructor(private router:Router, private route: ActivatedRoute,private coordonneService:CoordonneService) { }

  ngOnInit(): void {
    this.getCoordonne(this.route.snapshot.paramMap.get('id'));

  }
  getCoordonne(id:any): void {
    this.coordonneService.getCoordonneById(id)
      .subscribe(
        data => {
          this.id = data.id;
           this.nom = data.nom;
           this.email=data.email;
           this.adresse=data.adresse;
           this.telephone = data.telephone;
          
        },
      );
  }
  Update(f:any){
    console.log(f.value);
    
    console.log(this.route.snapshot.paramMap.get('id'));
     this.coordonneService.updateCoordonne(this.route.snapshot.paramMap.get('id'),f.value).subscribe(
       response => {
       console.log(response);
       this.router.navigate(['/coordonne']);
        }
   );
  
  }
}
