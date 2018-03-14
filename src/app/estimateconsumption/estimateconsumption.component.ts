import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';

@Component({
  selector: 'app-estimateconsumption',
  templateUrl: './estimateconsumption.component.html',
  styleUrls: ['./estimateconsumption.component.css']
})
export class EstimateconsumptionComponent implements OnInit {
  public binId:string;

  constructor(private data:DataserviceService) { }

  ngOnInit() {
  }

  get(){
    this.data.estimateTime(this.binId);
  }

}
