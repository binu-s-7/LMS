import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
constructor(
    private router: Router,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}
  proceedRegister() {
    const user = {
      name: this.registerForm.controls.name.value as string,
      userName: this.registerForm.controls.email.value as string,
      email: this.registerForm.controls.email.value as string,
      password: this.registerForm.controls.password.value?.toString(),
    };
    this.userService.registerUser(user).subscribe({
      next: (res) => {
        this.snackBar.open('Logged in Successfully', 'Dismiss', {
          duration: 3000,
        });
        this.router.navigate([`/login`]);
      },

