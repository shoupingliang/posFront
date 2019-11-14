import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/add/observable/map';
import 'rxjs/add/observable/toPromise';

import { Drink } from './drink.model';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  selectedDrink: Drink;
  drinks: Drink[];
  constructor() { }
}
