import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import USER_DATA from '../../assets/USER_DATA.json';

export interface UsersDataDetails {
  profile_picture: number;
  name: string;
  username: string;
  email: string;
  register_date: Date;
  last_login: Array<any>;
  location: Array<any>;
}

const usersData: UsersDataDetails[] = USER_DATA;

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})

export class TableUsersComponent implements AfterViewInit {
  // usersData = usersData;
  displayedColumns: string[] = ['profile_picture', 'name', 'username', 'email', 'register_date', 'last_login', 'location'];
  dataSource = new MatTableDataSource(usersData);

  @ViewChild(MatSort) sort: MatSort | any;

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    console.log('usersData', usersData);
  }

}
