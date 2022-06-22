import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeService } from '../services/type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
types : any;
  constructor( private router:Router, private typeService:TypeService) { }

  ngOnInit(): void {
    this.typeService.getAllType().subscribe((data:any)=>{
      this.types =data;
      console.log(data);
    });
  }
  onDelete(id:any){
    console.log(id);
    this.typeService.delete(id).subscribe(
      response => {
        console.log(response);
         })
    }
    onUpdate(id: any){
      this.router.navigate(['type/update/'+id]);
    }
}
