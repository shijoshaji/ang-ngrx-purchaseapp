import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent, LandingComponent, NavigationComponent } from './components';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingComponent,CarListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    AvatarModule,
    CardModule,
    DataViewModule,
    RatingModule,
    FormsModule, CommonModule,
    TagModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
