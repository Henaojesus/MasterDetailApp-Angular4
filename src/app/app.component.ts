import { Component } from '@angular/core';
//RouterOutlet is one of the directives provided by the RouterModule.
//The router displays each component immediately below the
//<router-outlet> as users navigate through the app.
@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes"  routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  //App Title
  title = 'Tour of Heroes';
}
