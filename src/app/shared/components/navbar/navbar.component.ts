import { Component, inject, signal } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  router = inject(Router);

  routes = signal<Route[]>([]);

  ngOnInit(): void {
    this.routes.set(this.router.config.filter((r) => r.data));
  }
}
