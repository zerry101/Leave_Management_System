import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ObserversModule } from '@angular/cdk/observers';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {



  constructor(public http: HttpClient) {


  }


  // url="http://localhost:4200/"

  // postData(data:any){
  //   return this.http.post(this.url,data);
  // }

  // getData(){
  //   return this.http.get(this.url);
  // }

  formData: any={};

  postData(data: any) {
    this.formData = data;
  }

  getData():any{
    // console.log(this.formData);
    return this.formData ;
  }

}
