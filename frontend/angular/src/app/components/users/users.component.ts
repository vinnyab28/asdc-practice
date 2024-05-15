import { Component } from '@angular/core';
import { User, UsersService } from './users.service';
import { TableModule } from "primeng/table";
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TableModule, TitleCasePipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  listOfUsers: User[] = [];
  constructor(private usersService: UsersService) {
    this.usersService.getUsers().subscribe(responseData => {
      this.listOfUsers = responseData;
    })
  }
}
