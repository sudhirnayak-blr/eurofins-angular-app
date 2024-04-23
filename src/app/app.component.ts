import { Component } from '@angular/core';

/* Component Decorator */
@Component({
  /* HTML selector inside which the template will be rendered */
  selector: 'app-root',
  //template file location
  templateUrl: './app.component.html',
  //style file location
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
