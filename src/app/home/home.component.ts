import { Component, OnInit } from '@angular/core';
import user_data from '../../assets/USER_DATA.json';
// import * as user_data from '../../assets/USER_DATA.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
    console.log('data', user_data);
  }

}
