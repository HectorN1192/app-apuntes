import { Component, inject, OnInit, signal } from '@angular/core';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'app-apuntes';

  router = inject(Router);

  routes = signal<Route[]>([]);

  ngOnInit(): void {
    this.routes.set(this.router.config.filter((r) => r.data));
  }
}
