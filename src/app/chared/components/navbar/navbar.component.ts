import { FlowbiteService } from './../../../core/services/flowbite/flowbite.service';
import { Component, inject, Input } from '@angular/core';

import { RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '../../../core/auth/services/authantication/auth.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

 private readonly flowbiteService = inject(FlowbiteService)
 private readonly authService = inject(AuthService)
 
  @Input({required:true}) isLogin!:boolean;

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }





 signout():void{
  this.authService.userLogout()
 }
}
