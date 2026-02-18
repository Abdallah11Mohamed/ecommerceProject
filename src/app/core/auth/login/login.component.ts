
import { Component, inject } from '@angular/core';
import { AuthService } from '../services/authantication/auth.service';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ɵInternalFormsSharedModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
 private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  loginForm = new FormGroup(
    {
    
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
    
     
    },
    
  );

  handleConfirmPassword(group: AbstractControl) {
    const password = group.get('password')?.value;
    const rePassword = group.get('rePassword')?.value;

    return password === rePassword ? null : { mismatch: true };
  }

  submitloginForm(): void {



    
    if (this.loginForm.valid) {
         this.authService.sendloginData(this.loginForm.value).subscribe({
      next: (res) => {
        console.log(res);
        if (res.message==="success") {

          localStorage.setItem("userToken", res.token)
           this.authService.decodeToken(); 
          setTimeout(() => {
  this.router.navigate(["/main/home"])
}, 1000);
        }

      },
      error: (err) => {
        console.log(err);
      },
    });
    }

 
  }
}
