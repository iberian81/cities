import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  public city = {
    ville:'',
    pays: '',
    continent: '',
    population: ''
  };


  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  //méthode pour ajouter une ville via formulaire
  addCity(){
    this.httpClient.post('http://localhost:3000/ville/', this.city).subscribe(
      ()=>{
        console.log(this.city);
        this.router.navigateByUrl('/home');
      }
    );
   
  }

}

