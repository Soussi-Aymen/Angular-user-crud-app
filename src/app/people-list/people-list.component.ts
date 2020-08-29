import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  peopleList = [
    /*{ id: 1, name: 'Zlatan', username: 'Ibrahimovic', phone: 73564987 },
    { id: 2, name: 'Lionel', username: 'Messi', phone: 27756951 },
    { id: 3, name: 'Hazem', username: 'Saissi', phone: 73564000 },*/
  ];

  usersList = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (result) => {
        this.usersList = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  delete(person) {
    let index = this.usersList.indexOf(person);
    this.usersList.splice(index, 1);

    this.userService.deleteUser(person._id).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
