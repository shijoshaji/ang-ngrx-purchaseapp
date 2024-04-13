import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cars, car } from 'src/utils/types/types';




@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export default class LandingComponent {

  appProductName!: string;
  public automotives$: Observable<Cars> = this.getCars();

  private getCars(): Observable<Cars> {
    return of([
      {
        carBrand: 'Maruti Suzuki',
        carModel: 'Baleno',
        carPrice: 100000,
        carRating: 3.7,
        carImage: "/assets/images/baleno.jpg",
        carInventatoryStatus: 'instock'
      },
      {
        carBrand: 'Hyundai',
        carModel: 'Creta',
        carPrice: 160000,
        carRating: 5,
        carImage: "/assets/images/creta.jpg",
        carInventatoryStatus: 'lowstock'
      },
      {
        carBrand: 'Honda',
        carModel: 'Jazz',
        carPrice: 110000,
        carRating: 3,
        carInventatoryStatus: 'outofstock',
        carImage: "/assets/images/jazz.jpg",
      }

    ]);
  }

  getSeverity(val: any) {
    // return 'success'
    switch (val.toUpperCase()) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return '';
    }
  };

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.appProductName = 'My Product';

  }

}
