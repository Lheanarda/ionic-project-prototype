import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offers=[];
  constructor(private placesService:PlacesService) { }

  ngOnInit() {
    this.offers = this.placesService.places;
  }



}
