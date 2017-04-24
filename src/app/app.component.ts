import { Component } from '@angular/core';

@Component({
  selector: 'cfp-root',
  template: `
  <h1>
    {{title}}
  </h1>
  
    <cfp-login></cfp-login>
    <cfp-password-recovery></cfp-password-recovery>
    <cfp-register></cfp-register>
  `,
  styles: []
})
export class AppComponent {
  title = 'cfp works!';
}
