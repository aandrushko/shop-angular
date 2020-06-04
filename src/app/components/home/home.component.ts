import { Component, OnInit } from '@angular/core';
import { } from 'src/app/services/database.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData: any;
  constructor(private afs: AuthService) {
    this.afs.user$.subscribe((user) => {
      this.userData = user
    })
  }

  ngOnInit(): void {
    console.log(this.userData)
  }

}
