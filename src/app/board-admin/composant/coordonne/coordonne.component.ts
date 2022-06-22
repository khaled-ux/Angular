import { Component, Input, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { CoordonneService } from './coordonne.service';


@Component({
  selector: 'app-coordonne',
  templateUrl: './coordonne.component.html',
  styleUrls: ['./coordonne.component.css']
})
export class CoordonneComponent implements OnInit {
  Coordonnes:any

  constructor(private coordonneService: CoordonneService,
    private router:Router) { }




ngOnInit(): void {
this.coordonneService.getAllCoordonne().subscribe((data:any)=>{
  this.Coordonnes=data;
 
});
 
}

onDelete(id:any){
console.log(id);
this.coordonneService.delete(id).subscribe(
  response => {
    console.log(response);
    
  }
 
)
}
onGetById(id:any){
  this.coordonneService.getCoordonneById(id).subscribe(
    response => {
      console.log(response);
    });
}

onUpdate(id: any){
  this.router.navigate(['coordonne/update/'+id]);
}


}
