import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ParametreService } from 'src/app/WebSite/site-vitrine/parametre.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
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
  name='text'
  value:any;
  nameProduit: string='name product';
  prixProduit:string='prix product';
  lat:  number= 52.488328;
  lng:  number = 8.717017;
  modalPopupObject: any;
  formdata:any;
  imageUrl: string ="/assets/img/images.png";
  file: any;
  droppedVegetables = [];
  droppedItems :any[] = [];
  dragEnabled = true;
  htmlText: any;
  test: string = '';
  ToEmail:any="kmekrazi@gmail.com";
  Subject:any;
  Body:any;
  sendemail:any;
  currentDraggedItem: any;
  newPath:any;
  Name:any;
  Email:any;
  message:any;
  Theme: any ;
SMS='Bienvenue';

  vegetables = [
    { name: 'text', type: 'input-text', inputType: 'text', placeholder:'text',IdUser:''},
    { name: 'date', type: 'date', inputType: 'date', placeholder: '' ,IdUser:''},
    { name: 'image', type: 'file', inputType: 'file', placeholder: '',IdUser:'' },
    { name: 'Paragrah', type: 'textarea', inputType: 'textarea', placeholder: '',IdUser:'' }, 
    { name: 'Carte', type: 'iframe', inputType: 'iframe', placeholder: '',lat:'',lng:'' ,IdUser:''},
    { name: 'Produit', type: 'Produit', inputType: 'Produit', placeholder: '',pathImage:'',nameProduit:'',prixProduit:'',IdUser:''},
    { name: 'formulaire', type: 'form', inputType: 'form', placeholder: '' ,IdUser:''},
    { name: 'editor text', type: 'editor', inputType: 'editor', placeholder: '', htmlContent:'',IdUser:''}
  ];

  constructor(private parmetre:ParametreService,private http: HttpClient,private router: Router)
  { this.modalPopupObject = {};}

 ngOnInit(): void {

   this.IdUser=sessionStorage.getItem('id');
   this.getParametre(this.IdUser);
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
         this.Theme=data.theme;
        
      },
    );
}

onAnyDrop(e: any) {
  this.currentDraggedItem = e;
  console.log(e);
    this.updateDroppedItem(this.currentDraggedItem);
}


updateDroppedItem(e: any): void {
  this.currentDraggedItem.dragData.placeholder = e.placeholder;
  this.currentDraggedItem.dragData.IdUser = sessionStorage.getItem('id');

  this.currentDraggedItem.dragData.pathImage =this.newPath;
  this.droppedItems.push(this.currentDraggedItem.dragData);
  console.log(this.droppedItems);
}  



drop(event: CdkDragDrop<string[]>) {
  moveItemInArray(this.droppedItems, event.previousIndex, event.currentIndex);
}




removeItem(item: any){
  this. droppedItems.forEach( (i, index) => {
    if(i=== item) this. droppedItems.splice(index,1);
  });
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




CreateComponents( ){
console.log(this.droppedItems);
console.log(this.IdUser);
this.parmetre.CreateComponents(this.droppedItems).subscribe(
 response => {
  console.log(response);
  alert("Vos composants ont été crée. Merci !");
  this.sendSMS(this.phone,this.SMS)
})
  if(this.Theme=="Restaurant"){
        this.router.navigate(['restaurant']);
      }
      else if(this.Theme=="Salle de Sort"){
        this.router.navigate(['gym']);
      }
      else  {
        this.router.navigate(['shop']);
      }    
      
}



onClickSubmit(data:any) {
    if(this.formdata.invalid)
   {
    
  this.formdata.get('description').markAsTouched();
  console.log(this.formdata);
  }
}
onFileSelected(event: any) {
  this.file=event.target.files[0];
   
}
onUpload(Image:any){
  let formData = new FormData();
  formData.append('image',this.file);
  this.newPath=this.file.name;
  this.currentDraggedItem.dragData.pathImage =this.newPath;
  this.http.post('http://localhost:5000/api/Image/save',formData)
  .subscribe(res=>{
    console.log(res);
    
  })
}
handleFileInput(file: FileList){
      this.file=file.item(0);
      //show image
      var reader=new FileReader();
      reader.onload=(event:any)=>{
      this.imageUrl=event.target.result;}
      reader.readAsDataURL(this.file);
}
sendSMS(phone: string, SMS: string): Observable<any> {
  return this.http.post('http://localhost:5000/api/SMS/send', {
   phone,
    SMS,
  }, httpOptions);

}

}
