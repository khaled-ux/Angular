import { Component,OnInit} from '@angular/core';
import { ParametreService } from '../../parametre.service';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-app-gym',
  templateUrl: './app-gym.component.html',
  styleUrls: ['./app-gym.component.css']
})
export class AppGymComponent implements OnInit {
  IdUser:any;
  nom:any;
  phone:any;
  email:any;
  adresse:any;
  telephone:any;
  description:any;
  dateOuverture:any;
  lienFacebook:any;
  lienLinkedin :any;
  lienInstagram :any;

  ToEmail:any="kmekrazi@gmail.com";
  Subject:any;
  Body:any;
  Name:any;
  Email:any;
  constructor(private parmetre:ParametreService,
    private http: HttpClient,private router: Router)
   { }

 
 
   ngOnInit(): void {

    this.IdUser=sessionStorage.getItem('id');
    this.getParametre(this.IdUser);
  }
  logout(){
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');
    this.router.navigate(['/login']);
    window.location.reload();
      }

  getParametre(IdUser:any): void {
    this.parmetre.getParametreByIdUser(IdUser)
      .subscribe(
        data => {
    console.log(data);
          this.nom= data.nom;
          this.phone = data.telephone;
           this.email = data.email;
           this.adresse=data.adresse;
           this.telephone=data.telephone;
           this.description=data.description;
           this.dateOuverture=data.dateOuverture;
           this.lienFacebook=data.lienFacebook;
           this.lienInstagram=data.lienInstagram;
           this.lienLinkedin=data.lienLinkedin;
          
        },
      );
  }
 
sendEmail(sendemail:any){
  let formData = new FormData();
  formData.append('ToEmail',this.ToEmail);
  let formData1 = new FormData();
  formData.append('Subject',this.Subject);
  let formData2 = new FormData();
  formData.append('Body','message :'+this.Body  + "/"+'name :'+this.Name +"/"+'email:'+"/"+this.Email);
  
  

this.http.post('http://localhost:5000/api/Mailing/sendmessage',formData)
.subscribe(res=>{
  
  alert("Your message has been sent. Thank you!");
})
}
}
