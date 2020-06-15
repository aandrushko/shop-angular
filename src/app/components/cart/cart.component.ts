import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { forkJoin, of, timer, zip } from 'rxjs';
import { map } from 'rxjs/operators'




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orderedItems: any;
  isLoading: boolean;
  userData: any
  constructor(
    private auth: AuthService,
    private dbs: DatabaseService
  ) {
    this.isLoading = true
  }
  ngOnInit(): void {
    zip(
      this.dbs.shopingItems,
      this.auth.user$
    ).subscribe((data: any) => {
      // this.userData = data[0];


      const items = data[0];
      const { orderedItems } = data[1];
      let usersOrderInfo = [];
      for (const itemId in orderedItems) {
        usersOrderInfo.push({ ...items.find(el => el.itemId === itemId), number: orderedItems[itemId] })
      }
      this.isLoading = false;
      console.log(usersOrderInfo)
      this.orderedItems = usersOrderInfo;
    });
  }
  addItemToOrder(itemId) {

  }
  removeItemFromOrder(itemId) { }

}
