import { Component } from '@angular/core';

import { GlobalService } from '@app/services/global.service';

@Component({
  selector: 'app-modal-quick',
  standalone: true,
  imports: [  ],
  templateUrl: './modal-quick.component.html',
  styleUrl: './modal-quick.component.css'
})
export class ModalQuickComponent {
constructor(public global:GlobalService){}
}
