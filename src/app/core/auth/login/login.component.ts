
import { Component, inject } from '@angular/core';
import { AuthService } from '../services/authantication/auth.service';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ɵInternalFormsSharedModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
 private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  isLoading:boolean = false;     


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

 
  

  submitloginForm(): void {


    this.isLoading = true;
    
    if (this.loginForm.valid) {
         this.authService.sendloginData(this.loginForm.value).subscribe({
      next: (res) => {
        console.log(res);
        if (res.message==="success") {
    this.isLoading = false;
          localStorage.setItem("userToken", res.token)
           this.authService.decodeToken(); 
          setTimeout(() => {
  this.router.navigate(["/main/home"])
}, 1000);
        }

      },
      error: (err) => {
        console.log(err);

            this.isLoading = false;
      },
    });
    }

 
  }
}
