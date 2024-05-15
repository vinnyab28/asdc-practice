import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from "primeng/button";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  constructor(private router: Router) { }

  onShowUsers() {
    this.router.navigate(["/", "users"]);
  }
}
