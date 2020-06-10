import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { throttleTime } from 'rxjs/operators';
import { observable } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})

export class NavbarComponent implements OnInit {
  authReady = false
  navItems: any;
  allowNavigation: boolean;
  userNameShort: string
  constructor(private authService: AuthService) {
  }
  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.allowNavigation = user !== null ? true : false;
      this.userNameShort = this.allowNavigation ? user.firstName.substr(0, 1) + user.lastName.substr(0, 1) : "";
      this.authReady = true
    })

  }
  logoutHandler() {
    this.authService.logout();
  }

}
