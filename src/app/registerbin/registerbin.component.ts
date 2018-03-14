import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';


@Component({
  selector: 'app-registerbin',
  templateUrl: './registerbin.component.html',
  styleUrls: ['./registerbin.component.css']
})
export class RegisterbinComponent implements OnInit {

  public binId:string; // binId as string
  public binCapacity:number; // binCapacity as number
  // DataService class injected in to constructor
  constructor(private data:DataserviceService) { }

  ngOnInit() {
  }
  // Method to pass collected data to service class
  registerBin(){
    this.data.registerBin(this.binId, this.binCapacity);
  }

}
