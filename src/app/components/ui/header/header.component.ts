import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthRESTService } from '@app/services/auth-rest.service';
import { GlobalService } from '@app/services/global.service';
import { virtualRouter } from '@app/services/virtualRouter.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
constructor(
  public auth:AuthRESTService,
  public global:GlobalService,
  public vR:virtualRouter){}
}
