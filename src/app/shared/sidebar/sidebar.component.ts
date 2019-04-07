import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Role } from 'src/app/models/role.model';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  target: string[]
}
export const ROUTES: RouteInfo[] = [
  { path: '/home', title: 'Home', icon: 'home', class: '', target: [Role.Basic, Role.Moderate, Role.Admin] },
  { path: '/about', title: 'About', icon: 'map', class: '', target: [Role.Basic, Role.Moderate, Role.Admin] },
  { path: '/search', title: 'Search Items', icon: 'search', class: '', target: [Role.Moderate, Role.Admin] },
  { path: '/tracked-items', title: 'Tracked Items', icon: 'assignment', class: '', target: [Role.Admin] }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  role: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentUser.subscribe((response) => {
      if(response) {
        this.role = response.role.toString();
        this.menuItems = ROUTES.filter(menuItem => menuItem);
      }
    }, (error) => {
      this.role = "Unknown"
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    });
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
