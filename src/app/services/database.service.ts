import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private itemsColection: any;
  items: Observable<any[]>
  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsColection = afs.collection('users');
  }
  addUserDataToDB(id, user) {
    debugger
    this.itemsColection.doc(id).set(user)
  }
  getUserDataFromDB() {

  }
}
