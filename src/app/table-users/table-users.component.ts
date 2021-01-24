import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import USER_DATA from '../../assets/USER_DATA.json';

export interface UsersDataDetails {
  profile_picture: string;
  name: string;
  username: string;
  email: string;
  register_date: string;
  last_login: Array<any>;
  location: Array<any>;
}

const usersData: UsersDataDetails[] = USER_DATA;

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})

export class TableUsersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'username', 'email', 'register_date', 'last_login', 'location'];
  // Assign the data to the data source for the table to render
  dataSource = new MatTableDataSource(usersData);

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor() { }

  ngOnInit(): void {
    console.log('usersData', usersData);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  test(row: any): any {
    console.log('row', row);
  }

}
