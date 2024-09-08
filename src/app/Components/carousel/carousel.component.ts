import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'] // تعديل هنا ليكون styleUrls بدلاً من styleUrl
})
export class CarouselComponent implements OnInit {
  responsiveOptions: Array<any> = [];
  agentsAndCompanies: any[] = [];
  @Input() products: any[] = [];
@Input()inMain:Boolean = true; 
  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {}

}
