import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  year: string = '';

  ngOnInit() {

    this.updateYear();
  }

  updateYear() {
    this.year = `${new Date().getFullYear()} `;

  }
}
