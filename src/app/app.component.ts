import { Component } from '@angular/core';

@Component({
  selector: 'cfp-root',
  template: `    
    <cfp-profile></cfp-profile>
    <!--<cfp-login></cfp-login>-->
    <!--<cfp-password-recovery></cfp-password-recovery>-->
    <!--<cfp-register></cfp-register>-->
  `,
  styles: []
})
export class AppComponent {
  title = 'cfp works!';
}
