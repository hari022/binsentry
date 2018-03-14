import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataserviceService} from './dataservice.service';
import { AppComponent } from './app.component';
import { RegisterbinComponent } from './registerbin/registerbin.component';
import { CollectreadingComponent } from './collectreading/collectreading.component';
import { EstimateconsumptionComponent } from './estimateconsumption/estimateconsumption.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterbinComponent,
    CollectreadingComponent,
    EstimateconsumptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
