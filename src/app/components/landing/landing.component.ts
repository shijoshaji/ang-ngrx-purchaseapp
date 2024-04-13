import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { car } from 'src/utils/types/types';


type Cars = Array<car>;

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
      }
    ]);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.appProductName = 'My Product';

  }

}
