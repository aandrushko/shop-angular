import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void {

    this.signUpForm = this.fb.group({
      firstName: '',
      lastName: '',
      age: '',
      phoneNumber: '',
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.minLength(6)]],
      displayName: ''
    })
    this.signUpForm.valueChanges.subscribe((form) => {
      // console.log(this.signUpForm)
      // this.applicationIsValid = (form.password === form.confirmPassword) && 
    })
  }
  createUserHandler() {
    this.authService.createUser(this.signUpForm.value);
  }

}
