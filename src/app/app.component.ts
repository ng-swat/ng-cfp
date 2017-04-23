import { Component } from '@angular/core';

@Component({
  selector: 'cfp-root',
  template: `
  <h1>
    {{title}}
  </h1>
  `,
  styles: []
})
export class AppComponent {
  title = 'cfp works!';
}
