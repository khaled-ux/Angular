import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {
  selectedFile:any;
  res:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onFileSelected(event: any) {
    this.selectedFile=event.target.files; 
  }

  onUpload(){
    let filedata= new FormData();
   for (var i=0;i<this.selectedFile.length;i++) {
     filedata.append('files',this.selectedFile[i],this.selectedFile[i].name);
   }
   this.http.post('http://localhost:5000/api/Image/saveImages',filedata).
   subscribe(res=>{
     this.res=res;
    console.log(res);
  });
  }

  

}
