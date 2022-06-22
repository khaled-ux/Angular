import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  page:any
  constructor(private router:Router,private pageService: PageService) { }

  ngOnInit(): void {
  }
  save(f: any){
    console.log(f.value);
 this.pageService.createPage(f.value).subscribe(
   response => {
    console.log(response);
   this.router.navigate(['/page']);
  })
}
}
