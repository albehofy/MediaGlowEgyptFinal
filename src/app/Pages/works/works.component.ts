import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {
  data:any;
  @Input() works:any;  
  constructor(private http:HttpClient){}
  ngOnInit() {
    this.http.get('assets/MediaGlowWorks.json').subscribe(response => {
      this.data = response;
      console.log(this.data)
    });
  }
}
