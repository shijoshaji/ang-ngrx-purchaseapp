import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cars } from 'src/utils/types/types';

@Component({
    selector: 'app-car-list',
    template: `    
    <p-dataView #dv [value]="(automotives$ | async)!">
        <ng-template pTemplate="list" let-cars>
            <div class="grid grid-nogutter">
                <div class="col-12" *ngFor="let item of cars; let first = first">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4"
                        [ngClass]="{ 'border-top-1 surface-border': !first }">
                        <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
                            [src]="item.carImage" [alt]="item.name" />
                        <div
                            class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <div class="text-2xl font-bold text-900">{{ item.carModel}}</div>
                                <p-rating [(ngModel)]="item.carRating" [readonly]="true"
                                    [cancel]="false"></p-rating>
                                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ item.carBrand }}</span>
                                    </span>
                                    <!-- <p-tag [value]="item.carInventatoryStatus" [severity]="getSeverity(item)"></p-tag> -->
                                    <p-tag [value]="item.carInventatoryStatus.toUpperCase()"
                                        [severity]="getSeverity(item.carInventatoryStatus)"
                                        ></p-tag>
                                </div>
                            </div>
                            <div
                                class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold">{{ '$' + item.carPrice }}</span>
                                <button pButton icon="pi pi-shopping-cart"
                                    class="md:align-self-end mb-2 p-button-rounded"
                                    [disabled]="item.carInventatoryStatus.toUpperCase() === 'OUTOFSTOCK'"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ng-template>
    </p-dataView>
    
    `,
    styles: []
})
export default class CarListComponent {

    @Input() public automotives$!: Observable<Cars>;
    constructor() { }


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


}
