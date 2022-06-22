import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  pages: any
  constructor(private router:Router,private pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.getAllPage().subscribe((data:any)=>{
      this.pages =data;
      console.log(data);
    });
  }
  onDelete(id:any){
    console.log(id);
    this.pageService.delete(id).subscribe(
      response => {
        console.log(response);
         })
    }
    onUpdate(id: any){
      this.router.navigate(['page/update/'+id]);
    }
}
