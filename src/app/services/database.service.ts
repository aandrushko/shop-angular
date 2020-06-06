import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private itemsColection: any;
  items: Observable<any[]>
  userData: any;
  isLoading: boolean
  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsColection = afs.collection('users');
  }
  addUserDataToDB(id, user) {
    this.itemsColection.doc(id).set(user)
  }
  getUserDataFromDB(id) {
    this.isLoading = true
    return this.afs.doc(`users/${id}`).valueChanges()
  }
  updateUserDataOnDB(uid, user) {
    return this.itemsColection.doc(uid)
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
}
