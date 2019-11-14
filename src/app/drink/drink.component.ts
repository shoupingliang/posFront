import { Component, OnInit } from '@angular/core';

import { DrinkService } from '../shared/drink.service';
import { }

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css'],
  providers: [DrinkService]
})
export class DrinkComponent implements OnInit {

  constructor(private drinkService: DrinkService) { }

  ngOnInit() {
  }

  refreshDrinkList(){
    this.drinkService.getDrinkList().subscribe((res)=>{
      this.drinkService.drinks = res;
    })
  }

}
