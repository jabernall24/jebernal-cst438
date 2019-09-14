import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hw2';

  constructor() {
    document.body.style.background = 'rgb(250, 250, 250);';
}
}
