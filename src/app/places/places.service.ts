import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
private _places: Place [] = [
  new Place ('id1',
     'Manhattan',
      'lille de de New york',
      'https://cdn.vox-cdn.com/thumbor/o8i78cus90a1owJAbC-kzlr7ALs=/0x0:6303x4202/1200x800/filters:focal(2648x1597:3656x2605)/cdn.vox-cdn.com/uploads/chorus_image/image/63239068/GettyImages_929640540_2.0.jpg', 455),
  new Place('id2',
   'Paris', 
   'la capitale glamour', 
   'https://static.lexpress.fr/medias_11906/w_2048,h_1146,c_crop,x_0,y_0/w_480,h_270,c_fill,g_north/v1559549149/vue-aerienne-de-la-tour-eiffel-le-14-juillet-2018-a-paris_6096037.jpg', 100),
  new Place('id3'
  , 'Istambul', 
  'lancienne capitale othomane', 
  'http://static1.squarespace.com/static/54f74f23e4b0952b4e0011c0/54f9cb03e4b0d8458d5fcbc7/5c9d898be4966bb1cb445f77/1553855508809/5ba3b4fd0f254324480b1066.jpg?format=1500w', 400),
];
constructor() { }

get places() {
  return [...this._places];
}


getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
