import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServicesDetails } from '../../Models/services-details';
import { DialogBoxComponent } from '../../Components/dialog-box/dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { ShareModelDataService } from '../../Services/share-model-data.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent implements OnInit {
  data: any;
  section: ServicesDetails = {
      id: "string",
        name: 'string',
        title:'string',
        description: 'string',
        image: 'string',
        features: [],
        parts: []
    }

  parts :any; 
  constructor(private router: ActivatedRoute, private http: HttpClient, private MatDialog:MatDialog, private ShareModelData:ShareModelDataService) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(
      {
        next: (res) => {
          let UserId:any = res; 
          this.fetchData(UserId.id)
        }
      }
    )
  }

  fetchData(id: any) {
    this.http.get('assets/MediaGlowData.json').subscribe(response => {
      this.data = response;
      for(let section of this.data.services) {
        if(section.id == id){
          this.section = section;
          this.parts = this.section.parts; 
          console.log(this.section.parts)
        }
      }
    });
  }

  openDialog() {
    this.MatDialog.open(DialogBoxComponent, {
      width: '95vh', 
      height: '95vh',
    })
  }

  addDialogData(data:string[]){
    this.ShareModelData.changeView(data);
  }
}
