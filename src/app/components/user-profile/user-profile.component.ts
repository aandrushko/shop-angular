import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as M from '../../../../node_modules/materialize-css'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  userData: any;
  isLoading: boolean;
  userForm: FormGroup;
  editModeEnabled: boolean;
  constructor(
    private afs: DatabaseService,
    private auth: AuthService,
    private fb: FormBuilder,

  ) {
    this.userForm = this.fb.group({
      firstName: '',
      lastName: '',
      age: '',
      phoneNumber: '',
      email: ['', [Validators.required, Validators.email]],
      displayName: ''
    })
  }
  ngOnInit(): void {
    this.isLoading = true;
    this.editModeEnabled = false
    this.userData = this.auth.user$.subscribe(user => {
      this.fillForm(user)
      this.isLoading = false;
    });

  }
  cancelChanges() {
    this.fillForm(this.userData);
    this.editModeEnabled = false;
  }
  fillForm(user) {
    this.userData = user;
    const {
      firstName,
      lastName,
      age,
      phoneNumber,
      email,
      displayName
    } = user;
    this.userForm.setValue({
      firstName: firstName,
      lastName: lastName,
      age: age,
      phoneNumber: phoneNumber,
      email: email,
      displayName: displayName
    })
    M.updateTextFields();
  }
  switchEditMode() {
    this.editModeEnabled = !this.editModeEnabled
  }
  updateUserData() {
    this.afs.updateUserDataOnDB(this.auth.userId, this.userForm.value)
      .then(() => {
        this.switchEditMode()
      })
  }

}
