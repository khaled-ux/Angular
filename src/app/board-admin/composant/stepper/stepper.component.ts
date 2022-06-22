import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StepperService } from './stepper.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
    Nom:any ;
    Email:any;
    Adresse:any;
    Telephone:any;
    Theme: any ;
    IdUser:any;
    Description:any;
    dateOuverture:any;
    lienFacebook:any;
    lienLinkedin :any;
    lienInstagram :any;
    paymentHandler: any =null
  constructor(private stepperService: StepperService,private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.Invokestripe();
    this.IdUser=sessionStorage.getItem('id');
    console.log(this.IdUser);
  }
 
  saveParametre(e:any,f:any){
    this.stepperService.save(this.Nom,this.Email,this.Adresse,this.Telephone,this.Theme,
      this.IdUser,this.Description,this.dateOuverture,this.lienFacebook,this.lienLinkedin,this.lienInstagram)
    .subscribe(data => {
        console.log(data)
      })
      // if(this.Theme=="Restaurant"){
      //   this.router.navigate(['restaurant']);
      // }
      // else if(this.Theme=="Salle de Sort"){
      //   this.router.navigate(['gym']);
      // }
      // else  {
      //   this.router.navigate(['shop']);
      // }    
      

  }  
  resetForm(e:any,f:any){
    e.reset();
    f.reset();
  
  }



  makePayment (amount: any) {
    const   paymentHandler= (<any>window).StripeCheckout.configure({
      key:
       "pk_test_51KieuiFagopl3Q952WDY6Aqzctf21uLUzQxVWjmk6Qr9SJVFzZ4Z5nuOlJiY6Jd1oxqfeSmPtlTN84vrKEklS5dR00umY8DkVi",

      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken.card);
        alert("Stripe token generated!");
      },
    });

    paymentHandler.open({
      name: 'Sofia Technologies',
      description: 'Abonnment',
      amount: amount = 100,
    });
  
}


Invokestripe() 
{
  if (!window.document.getElementById('stripe-script'))
   {
     const script = window.document.createElement('script');
     script.id ="stripe-script";
     script.type ="text/javascript";
     script.src ="https://checkout.stripe.com/checkout.js";
     
    window.document.body.appendChild(script);
    }
}
}