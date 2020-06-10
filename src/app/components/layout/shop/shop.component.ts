import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  items: any;
  isLoading: boolean;
  userData: any;
  constructor(
    private afs: DatabaseService,
    private auth: AuthService
  ) {
    this.isLoading = true;
    this.afs.shopingItems.subscribe((res) => {
      this.items = res
      this.isLoading = false
    });
    this.auth.user$.subscribe((res) => {
      this.userData = res
    })

  }
  ngOnInit(): void {
  }
  addItemToCart(item) {
    this.afs.addItemToUsersCart(this.auth.userId, item, this.userData);
  }
}
