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
  title = 'First Angular App';
  counter = 10; 

  click(e:any) { 
    this.title = "New Title" + this.counter; 
    this.counter+=10;
  }
}
