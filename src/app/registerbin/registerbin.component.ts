import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';


@Component({
  selector: 'app-registerbin',
  templateUrl: './registerbin.component.html',
  styleUrls: ['./registerbin.component.css']
})
export class RegisterbinComponent implements OnInit {

  public binId:string;
  public binCapacity:number;

  constructor(private data:DataserviceService) { }

  ngOnInit() {
  }

  registerBin(){
    this.data.registerBin(this.binId, this.binCapacity);
  }

}
