import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public data : any;
  public id;
  public selectedCity: any = {
    ville: '',
    pays: '',
    continent: '',
    population: ''
  }

  constructor(private activatedRoute: ActivatedRoute,  private httpClient: HttpClient,  private router: Router) { 

  }

  ngOnInit() {
    //récupération de l'id sélectionné dans la page home
     this.id =  this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  //récupération des donnés detaillés de la ville sélectionnée
  ionViewDidEnter() {
    let req = this.httpClient.get('http://localhost:3000/ville/' + this.id);
    req.subscribe((data:any) =>{
      this.selectedCity = data[0];
      console.log(this.selectedCity);
    });
  }
  





}
