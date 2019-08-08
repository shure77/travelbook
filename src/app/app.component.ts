import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navbarTitle = 'huhu';

  public setNavbarTitle($event) {
    this.navbarTitle = $event;
  }

}
