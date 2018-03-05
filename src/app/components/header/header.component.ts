import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', // This is what Angular will know our component as if we include it in other places in our application. <app-header></app-header>
  templateUrl: './header.component.html', //This is how our html file is connected to this component
  styleUrls: ['./header.component.css'] //This is how we also connect CSS files to the html page. *Notice the square brackets, that indicates that we can include multiple stylesheets!
})
//Component decorator houses the settings of our header component
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
