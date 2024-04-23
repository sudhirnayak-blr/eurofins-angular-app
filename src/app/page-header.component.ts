import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css'
})
export class PageHeaderComponent {

  @Input()  //is an input parameter, value is assigned by the parent container
  text:string = "Page Header";
}
