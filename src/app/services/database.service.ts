import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private usersCollection: any;
  shopingItems: any;
  userData: any;
  isLoading: boolean;
  orderCollection: any;
  constructor(
    private afs: AngularFirestore,
  ) {
    this.usersCollection = afs.collection('users');
    this.shopingItems = afs.collection("itemsList").valueChanges({ idField: 'itemId' });
  }
  addUserDataToDB(id, user) {
    this.usersCollection.doc(id).set(user)
  }
  // getOrderState(id) {
  //   this.afs.doc(`users/${id}`).valueChanges()
  // }
  getUserDataFromDB(id) {
    this.isLoading = true
    return this.afs.doc(`users/${id}/`).valueChanges();
  }
  updateUserDataOnDB(uid, user) {
    return this.usersCollection.doc(uid)
      .update(user)
      .then(() => {
        Swal.fire({
          text: "Updated successfully",
          icon: "success",
          position: 'top-top',
          showConfirmButton: false,
          timer: 1500
        });
      })
  }
  addItemToUsersCart(uid, item, user) {
    let { orderedItems } = user;
    let quantity = 1;
    if (orderedItems && orderedItems.hasOwnProperty(item.itemId)) {
      quantity = orderedItems[item.itemId] + 1
    }
    this.afs.doc(`users/${uid}/`).update({
      [`orderedItems.${item.itemId}`]: quantity
    }).then(res => {
      console.log(res, "added to cart")
    })
  }
}
