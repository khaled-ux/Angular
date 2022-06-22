import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeService } from '../../services/type.service';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {
type:any
  constructor(private router:Router,private typeService:TypeService) { }

  ngOnInit(): void {
  }
  save(f: any){
    console.log(f.value);
 this.typeService.createType(f.value).subscribe(
   response => {
    console.log(response);
   this.router.navigate(['/type']);
  })
}
}