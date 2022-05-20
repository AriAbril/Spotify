import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
<<<<<<< HEAD
import { PrimeNgModule } from './prime-ng/prime-ng.module';
=======
import {CardModule} from 'primeng/card';
>>>>>>> ad9100b8c03dc3f445d5f74813d38dac8d07a0d7

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    PrimeNgModule
=======
    CardModule
>>>>>>> ad9100b8c03dc3f445d5f74813d38dac8d07a0d7
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
