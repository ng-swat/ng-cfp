import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cfp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public menus = [];
  public user;

  constructor() {
    this.user = {file:'../assets/default_user.png', name:'Maxime'};
    this.menus.push({id:1, name:'Profile', iconClass:'glyphicon glyphicon-user'});
    this.menus.push({id:2, name:'Papers list', iconClass:'glyphicon glyphicon-list'});
    this.menus.push({id:3, name:'New paper', iconClass:'glyphicon glyphicon-plus'});
    this.menus.push({id:4, name:'Password', iconClass:'glyphicon glyphicon-lock'});
    this.menus.push({id:5, name:'Logout', iconClass:'glyphicon glyphicon-remove'});
  }

  ngOnInit() {
  }

}
