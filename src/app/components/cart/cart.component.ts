import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalItems: number
  constructor(
    private auth: AuthService
  ) {
    this.auth.user$.subscribe((res) => {
      let total = 0;
      for (const item in res.orderedItems) {
        total += res.orderedItems[item]
      }
      this.totalItems = total;
    }
    )
  }

  ngOnInit(): void {
  }

}
