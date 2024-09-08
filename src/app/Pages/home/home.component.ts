import { Component } from '@angular/core';
import { ScrollService } from '../../Services/scroll.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  data: any;
  constructor(private scrollService: ScrollService, private http: HttpClient) {
    this.http.get('assets/MediaGlowData.json').subscribe(response => {
      this.data = response;
    });
  }
  toTop(): void {
    this.scrollService.toTop('team')
  }
  ngOnInit() {
    this.scrollService.toTop(this.scrollService.scrolledItem);
    console.log(this.scrollService.scrolledItem)

  }
}
