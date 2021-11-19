import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  
  @HostListener('document:click', ['$event'])
  onClick(event: PointerEvent) {
    window.alert(
      `You clicked on point with coordinates: \n X=${event.pageX} and Y=${event.pageY}`
    );
  }
}
