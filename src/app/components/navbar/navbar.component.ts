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
  allowNavigation: boolean
  constructor(private authService: AuthService) {

  }
  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.allowNavigation = user !== null ? true : false;
      this.authReady = true
    })
  }
  logoutHandler() {
    this.authService.logout();
  }

}
