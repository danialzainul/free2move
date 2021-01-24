import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser = {
    name: 'Peter Parker', position: 'Manager'
  };
  currentDate: Date | undefined;

  constructor(
  ) {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1);
  }

  ngOnInit(): void {
  }

}
