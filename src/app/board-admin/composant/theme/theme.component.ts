import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
themes: any
  constructor(private router:Router,private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.getAllTheme().subscribe((data:any)=>{
      this.themes =data;
      console.log(data);
    });
  }
  onDelete(id:any){
    console.log(id);
    this.themeService.delete(id).subscribe(
      response => {
        console.log(response);
         })
    }
    onUpdate(id: any){
      this.router.navigate(['theme/update/'+id]);
    }
}
