import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';

@Component({
  selector: 'app-collectreading',
  templateUrl: './collectreading.component.html',
  styleUrls: ['./collectreading.component.css']
})
export class CollectreadingComponent implements OnInit {
  public binId:string; // binId as string
  public currentTonnage:number; // currentTonnage as number
  public time:number; // time as number
// DataService class inject in to constructor
  constructor(private data:DataserviceService) { }

  ngOnInit() {
  }
  // method to pass collected data to the service class
  collectReading(){
    this.data.collectReading(this.binId, this.currentTonnage, this.time);
  }

}
