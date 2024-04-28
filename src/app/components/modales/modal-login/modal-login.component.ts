import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SignInComponent } from '@app/components/sign-in/sign-in.component';
import { SignUpComponent } from '@app/components/sign-up/sign-up.component';
import { AuthRESTService } from '@app/services/auth-rest.service';
import { GlobalService } from '@app/services/global.service';

@Component({
  selector: 'app-modal-login',
  standalone: true,
  imports: [SignInComponent,
    SignUpComponent,CommonModule],
  templateUrl: './modal-login.component.html',
  styleUrl: './modal-login.component.css'
})
export class ModalLoginComponent {
  constructor(
    public global:GlobalService,
    public auth:AuthRESTService
  ){}
}
