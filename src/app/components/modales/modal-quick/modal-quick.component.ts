import { CommonModule, } from '@angular/common';
import { Component ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { GlobalService } from '@app/services/global.service';
// import GLightbox from 'glightbox';
// const lightbox = GLightbox({
//   selector: '.glightbox'
// });
@Component({
  selector: 'app-modal-quick',
  standalone: true,
  imports: [CommonModule  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './modal-quick.component.html',
  styleUrl: './modal-quick.component.css'
})

export class ModalQuickComponent {
constructor(public global:GlobalService){
  
}
}
