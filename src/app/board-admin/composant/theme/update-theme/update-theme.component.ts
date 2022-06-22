import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-update-theme',
  templateUrl: './update-theme.component.html',
  styleUrls: ['./update-theme.component.css']
})
export class UpdateThemeComponent implements OnInit {

  id: any
  theme: any;
    constructor(private router:Router, private route: ActivatedRoute,private themeService: ThemeService) { }
  
    ngOnInit(): void {
      this.gettheme(this.route.snapshot.paramMap.get('id'));
    }
    gettheme(id:any): void {
      this.themeService.getThemeById(id)
        .subscribe(
          data => {
            this.id = data.Id;
             this.theme = data.theme;
          },
        );
    }
    Update(f:any){
      console.log(f.value);
      
      console.log(this.route.snapshot.paramMap.get('id'));
       this.themeService.updateTheme(this.route.snapshot.paramMap.get('id'),f.value).subscribe(
         response => {
         console.log(response);
         this.router.navigate(['/theme']);
          }
     );
    
    }
}
