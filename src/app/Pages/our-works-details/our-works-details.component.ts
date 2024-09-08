import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ShareModelDataService } from '../../Services/share-model-data.service';
import { ServicesDetails } from '../../Models/services-details';
import { DialogBoxComponent } from '../../Components/dialog-box/dialog-box.component';
@Component({
  selector: 'app-our-works-details',
  templateUrl: './our-works-details.component.html',
  styleUrl: './our-works-details.component.scss'
})
export class OurWorksDetailsComponent {
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
    this.http.get('assets/MediaGlowWorks.json').subscribe(response => {
      this.data = response;
      console.log(this.data)
      for(let section of this.data) {
        if(section.id == id){
          this.section = section;
          this.parts = this.section.parts; 
          console.log(this.parts)
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
  