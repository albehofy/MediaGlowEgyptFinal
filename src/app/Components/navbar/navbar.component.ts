import { Component } from '@angular/core';
import { ScrollService } from '../../Services/scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isOpen: boolean = false;
  isToggled: boolean = false;

  constructor(private scrollService: ScrollService) {
  }
  scroll(id: string) {
    this.scrollService.toTop(id); 
    this.scrollService.scrolledItem = id; 
  }
}
