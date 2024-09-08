import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareModelDataService {

  moduleData: BehaviorSubject<string[]> = new BehaviorSubject <string[]>(['','','']); 
  constructor() { }
  changeView(ViewData:Array<string>){
    this.moduleData.next(ViewData); 
    console.log(this.showData())
  }
  showData(){
    let returnedData:Array<string> = ['']; 
    this.moduleData.subscribe({
      next: (res)=>{
        returnedData = res; 
      }
    });
    return returnedData
  }
}
