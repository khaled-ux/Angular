import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent  implements OnInit {
  file: any;
  image: any
  imageUrl: string = "/assets/img/images.png";
  id:number =205

  constructor(private http: HttpClient,private imageService: ImageService) {}
  ngOnInit(): void {
  this.getImage(this.id);
   
  }
  onFileSelected(event: any) {
    this.file=event.target.files[0];
     
  }
  onUpload(Image:any){
    let formData = new FormData();
    formData.append('image',this.file);
    this.http.post('http://localhost:5000/api/Image/save',formData)
    .subscribe(res=>{
      console.log(res);
      
    });
  }
  handleFileInput(file: FileList){
        this.file=file.item(0);
        //show image
        var reader=new FileReader();
        reader.onload=(event:any)=>{
        this.imageUrl=event.target.result;
          }
        reader.readAsDataURL(this.file);
  }

getImage(id:number){
this.imageService.getImageById(id).subscribe(
  (data:any)=>{
    this.image =data;
    console.log(data);
  
  });
 
}



}
