import { Component } from '@angular/core';

@Component({
  selector: 'cfp-root',
  template: `
  <h1>
    {{title}}
  </h1>
  <div class="container-fluid display-table">
  <div class="row display-table-row">
  <div class="col-md-3 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
   
    <cfp-navigation></cfp-navigation>
  </div>
  <div class="col-md-9 col-sm-11 display-table-cell v-align">
      <div class="row">
        <header>
          <div class="col-md-9">
            <div class="hidden-xs hidden-sm">
              <!--cfp-password></cfp-password-->
              <router-outlet></router-outlet>
            </div>
          </div>
        </header>
      </div>       
  </div>
  </div>
  </div>
  `,
  styles: [
  ]
})
export class AppComponent {
}
