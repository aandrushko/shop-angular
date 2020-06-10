import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  @Input() item: any;
  @Output() addItemAction = new EventEmitter();
  items: any;
  constructor() {

  }
  ngOnInit(): void {
  }
  addItemHandler() {
    this.addItemAction.emit(this.item);
  }
}
