import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todoList';
  constructor() {
    // setTimeout(() => {
    //   this.title = 'changed';
    // }, 2000);
  }
}
