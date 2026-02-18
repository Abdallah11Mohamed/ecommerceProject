import { Component, inject, Input } from '@angular/core';

import { RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '../../../core/auth/services/authantication/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
private readonly authService = inject(AuthService)
 @Input({required:true}) isLogin!:boolean;




 signout():void{
  this.authService.userLogout()
 }
}
