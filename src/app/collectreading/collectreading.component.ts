import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';

@Component({
  selector: 'app-collectreading',
  templateUrl: './collectreading.component.html',
  styleUrls: ['./collectreading.component.css']
})
export class CollectreadingComponent implements OnInit {
  public binId:string;
  public currentTonnage:number;
  public time:number;

  constructor(private data:DataserviceService) { }

  ngOnInit() {
  }

  collectReading(){
    this.data.collectReading(this.binId, this.currentTonnage, this.time);
  }

}
