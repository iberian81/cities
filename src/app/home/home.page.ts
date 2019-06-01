import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink, NavigationExtras } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public title: String = "Cities";

  
  public cityList=[];

constructor(public httpClient : HttpClient, public router: Router){
  
}


ionViewDidEnter(){
  this.httpClient.get("http://localhost:3000/villes/").subscribe(
    (data: any) => {
      this.cityList = data;
      console.log(this.cityList);
    },
    err => console.log(err)
  );   
}


deleteCity(id){
  this.httpClient.delete('http://localhost:3000/ville/'+id).subscribe(
    ()=>{
      this.ionViewDidEnter();
    },
    err => console.log(err)
  );
}

showDetail(id){
  this.router.navigateByUrl('/detail/'+id);
}


updateCity(id){
  this.httpClient.put('http://localhost:3000/ville', id).subscribe(
    ()=>console.log("update ok")
  );
}



}
