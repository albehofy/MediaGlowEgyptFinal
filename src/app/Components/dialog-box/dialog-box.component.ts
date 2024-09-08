import { Component, Input } from '@angular/core';
import { ShareModelDataService } from '../../Services/share-model-data.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.scss', 
})
export class DialogBoxComponent {
  counter:number = 0; 

  dialogData:any = [''];

  constructor(private shareModuleData:ShareModelDataService){}

  maxmizingCounter(){
    this.counter >= this.dialogData.length -1  ?this.counter = 0 : this.counter++; 
  }
  minimizingCounter(){
    this.counter <= 0  ?this.counter = this.dialogData.length - 1 : this.counter--; 
  }

  ngOnInit(){
    this.dialogData = this.shareModuleData.showData();
    console.log(this.dialogData)
  }
  
}
