import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places:Place[]=[
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.', 
      'https://cdn.pixabay.com/photo/2016/11/23/15/32/architecture-1853552_1280.jpg',
      149.99
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'Romantic place in Paris', 
      'https://tophotel.news/wp-content/uploads/2018/06/25hours-francess-1024x512.jpg',
      199.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!', 
      'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1539350615000/photosp/3677a61d-5698-4eaa-b02c-bfb902e2e7de/stock-photo-nature-outdoors-silhouette-mountain-fog-mist-trees-hazy-foggy-3677a61d-5698-4eaa-b02c-bfb902e2e7de.jpg',
      119.99
    ),
  ];

  get places(){
    return[...this._places]
  }

  constructor() { }
}
