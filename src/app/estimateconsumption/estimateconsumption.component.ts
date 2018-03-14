import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';

@Component({
  selector: 'app-estimateconsumption',
  templateUrl: './estimateconsumption.component.html',
  styleUrls: ['./estimateconsumption.component.css']
})
export class EstimateconsumptionComponent implements OnInit {
  public binId:string // binId as string
// DataService class injected in to constructor
  constructor(private data:DataserviceService) { }

  ngOnInit() {
  }
  // Method to pass data to the service class
  getBinId(){
    this.data.estimateTime(this.binId);
  }

}
