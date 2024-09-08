import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrolledItem:string = 'home'; 

  constructor() { }
  toTop(id:string): void {
    const contentElement = document.getElementById(id);
    this.scrolledItem = id; 
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
