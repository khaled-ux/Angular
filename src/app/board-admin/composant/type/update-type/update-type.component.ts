import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeService } from '../../services/type.service';

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styleUrls: ['./update-type.component.css']
})
export class UpdateTypeComponent implements OnInit {
id: any
type: any;
  constructor(private router:Router, private route: ActivatedRoute,private typeService :TypeService) { }

  ngOnInit(): void {
    this.getType(this.route.snapshot.paramMap.get('id'));
  }
  getType(id:any): void {
    this.typeService.getTypeById(id)
      .subscribe(
        data => {
          this.id = data.id;
           this.type = data.type;
        },
      );
  }
  Update(f:any){
    console.log(f.value);
    
    console.log(this.route.snapshot.paramMap.get('id'));
     this.typeService.updateType(this.route.snapshot.paramMap.get('id'),f.value).subscribe(
       response => {
       console.log(response);
       this.router.navigate(['/type']);
        }
   );
  
  }
}
