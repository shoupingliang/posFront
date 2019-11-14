import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {map}  from 'rxjs/operators';

import { Drink } from './drink.model';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  selectedDrink: Drink;
  drinks: Drink[];
  readonly baseURL = 'http://ec2-18-184-215-154.eu-central-1.compute.amazonaws.com:3000/drinks/'
  constructor(private http: HttpClient) { }

  getDrinkList(){
    return this.http.get(this.baseURL);
  }
}
