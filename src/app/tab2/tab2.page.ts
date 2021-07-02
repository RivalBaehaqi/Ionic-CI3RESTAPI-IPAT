import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {

  nis: string;
  nama: string;
  kelas: string;
  public POSTData: any;
  constructor(
    private http: HttpClient,
    private toast: ToastController
  ) { }

  submit() {

    if(this.nis!=null && this.nama!=null && this.kelas!=null){
        this._Postdata();
        console.log(this.nis, this.nama, this.kelas);
        this.nis="";
        this.nama="";
        this.kelas="";
        alert("Create Data Successfully");
    }else{
        alert("Data harus lengkap !");
    }
    
      
    
  }

  _Postdata() {
    let data: Observable<any>;
    data = this.http.get('http://localhost/codeigniter/apiserver/index.php/api/postdata/' + this.nis + '/' + this.nama + '/' + this.kelas);
    data.subscribe(result => {
      this.POSTData = result;
      console.log(result);
      if (result.status === 'Ok') {
        alert("Create Data Successfully");
      }
    });
  }
}


