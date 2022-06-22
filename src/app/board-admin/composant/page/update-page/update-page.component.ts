import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent implements OnInit {

  id: any
  page: any;
    constructor(private router:Router, private route: ActivatedRoute,private pageService: PageService) { }
  
    ngOnInit(): void {
      this.getpage(this.route.snapshot.paramMap.get('id'));
    }
    getpage(id:any): void {
      this.pageService.getPageById(id)
        .subscribe(
          data => {
            this.id = data.id;
             this.page = data.namePage;
          },
        );
    }
    Update(f:any){
      console.log(f.value);
      
      console.log(this.route.snapshot.paramMap.get('id'));
       this.pageService.updatePage(this.route.snapshot.paramMap.get('id'),f.value).subscribe(
         response => {
         console.log(response);
         this.router.navigate(['/page']);
          }
     );
    
    }
}
