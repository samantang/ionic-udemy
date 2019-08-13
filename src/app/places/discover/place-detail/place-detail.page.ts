import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private router: Router, private route: ActivatedRoute,
              private navCtr: NavController,
              private modalCtrl: ModalController,
              private placeService: PlacesService) { }
  
    ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtr.navigateBack('/palces/tabs/discover');
        return;
      }
      this.place = this.placeService.getPlace(paramMap.get('placeId'));
    });
  }

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');
    // this.navCtr.navigateBack('/places/tabs/discover');

    this.modalCtrl.create({component: CreateBookingComponent, componentProps: {selectedPlace: this.place}})
    .then(modalEl => {modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resulData => {
      console.log(resulData.data, resulData.role);
      if(resulData === 'confirm') {
        console.log('BOOKED');
      }
    });
  }
 
}
