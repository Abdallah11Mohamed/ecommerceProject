import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/authantication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  registerForm = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
        ),
      ]),
      rePassword: new FormControl(null, [
        Validators.required,
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        ),
      ]),
    },
    { validators: this.handleConfirmPassword } // ⭐ هنا الحل
  );

  handleConfirmPassword(group: AbstractControl) {
    const password = group.get('password')?.value;
    const rePassword = group.get('rePassword')?.value;

    return password === rePassword ? null : { mismatch: true };
  }

  submitRegisterForm(): void {



    
    if (this.registerForm.valid) {
         this.authService.sendRegisterData(this.registerForm.value).subscribe({
      next: (res) => {
        console.log(res);
        if (res.message==="success") {
          setTimeout(() => {
  this.router.navigate(["/auth/login"])
}, 1000);
        }
setTimeout(() => {
  this.router.navigate(["/auth/login"])
}, 1000);
      },
      error: (err) => {
        console.log(err);
      },
    });
    }

 
  }
}
