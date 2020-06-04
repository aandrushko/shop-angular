import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',

})
export class UserProfileComponent implements OnInit {
  userData: any;
  constructor(afs: DatabaseService) {
    // this.userData = this.afs
  }

  ngOnInit(): void {
  }

}
