import { Component } from '@angular/core';

import{HeaderComponent} from './header/header.component';
import {FooterComponent} from'./footer/footer.component';
import{ContentComponent}from './content/content.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent,FooterComponent, ContentComponent],
  // templateUrl: './app.component.html',
  template:`
   <div class ="container">
  <app-header></app-header >
  <app-footer></app-footer>
  <app-content></app-content>
</div>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ThirdProject';
}
