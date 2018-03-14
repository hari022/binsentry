import { Injectable } from '@angular/core';

@Injectable()
export class DataserviceService {

  public data:any [] = [];  // Data array of objects to store data in programme memory


  constructor() { }
  // Method to register bin
  registerBin(binId, binCapacity){
    // console.log(binId, binCapacity);
  //  Creating JavaScript Object to save the data to the data array
  this.data.push({
    id:binId,
    capacity:binCapacity,
  })
    console.log('Bin registered',this.data);
  }

  estimateTime(binId){
    for(let i=0; i<this.data.length;i++){
      if(this.data[i].id == binId){
        if ('reading2' in this.data[i]){
          let changeInPercentage:number = (100*this.data[i].reading2.currentTonage)/this.data[i].reading1.currentTonage;
          let changeInTime:number = this.data[i].reading2.time - this.data[i].reading1.time;
          let newTimeDifference:number = ((changeInTime * 100)/changeInPercentage);
          let newTime:number = +this.data[i].reading1.time + newTimeDifference;
          // console.log(changeInTime);
          // console.log(changeInPercentage);
          // console.log(newTimeDifference);
          console.log(newTime);
          // let date = new Date(newTime*1000);
          let m = new Date(newTime);
          let dateString =

              ("0" + (m.getMonth()+1)).slice(-2) + "/" +
              ("0" + m.getDate()).slice(-2) + "/" +
              m.getFullYear() + " "+
              ("0" + m.getHours()).slice(-2) + ":" +
              ("0" + m.getMinutes()).slice(-2) + ":" +
              ("0" + m.getSeconds()).slice(-2);


          console.log('Bin will become empty at: ', dateString);

        }
        // console.log(this.data[i]);
      }
    }

  }
  // Method to save collected reading to the data array
  collectReading(binId, currentTonage, time){
    // iterates through existing database and if bin is available then updates the JavaScript Object
    for(let i=0; i<this.data.length;i++){
      if(this.data[i].id == binId){
        if ('reading1' in this.data[i]){
          this.data[i] = {
            id:this.data[i].id,
            capacity:this.data[i].capacity,
            reading1:{
              time: this.data[i].reading1.time,
              currentTonage: this.data[i].reading1.currentTonage
            },
            reading2:{
              time: time,
              currentTonage: currentTonage
            }
          }
        }else {
          this.data[i] = {
            id:this.data[i].id,
            capacity:this.data[i].capacity,
            reading1:{
              time: time,
              currentTonage: currentTonage
            }
          }
        }


        console.log(' Readings collected',this.data);
      }
    }
    // console.log(binId, currentTonage, time);

  }

}
