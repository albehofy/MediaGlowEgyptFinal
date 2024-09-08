import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-services-show',
  templateUrl: './services-show.component.html',
  styleUrl: './services-show.component.scss'
})
export class ServicesShowComponent {
  @Input()services: any;
  
}
