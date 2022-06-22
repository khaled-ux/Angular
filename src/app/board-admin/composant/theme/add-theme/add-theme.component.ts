import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent implements OnInit {

  theme:any
  constructor(private router:Router,private themeService: ThemeService) { }

  ngOnInit(): void {
  }
  save(f: any){
    console.log(f.value);
 this.themeService.createTheme(f.value).subscribe(
   response => {
    console.log(response);
   this.router.navigate(['/theme']);
  })
}
}
