import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="container">
      <h1>404 Not Found!</h1>
      <p>the page you are tyring to access is not Found</p>
      <button routerLink="/">back to home</button>
    </div>
  `,
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {}
