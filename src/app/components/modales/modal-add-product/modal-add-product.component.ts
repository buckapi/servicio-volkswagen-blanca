import { CommonModule } from '@angular/common';
import { Component,ViewChild } from '@angular/core';
import { GlobalService } from '@app/services/global.service';
import { FilePickerComponent } from 'ngx-awesome-uploader';
import { ValidationError } from 'ngx-awesome-uploader';
import { FilePreviewModel } from 'ngx-awesome-uploader';
import { UploaderCaptions } from 'ngx-awesome-uploader';
import { HttpClient } from '@angular/common/http';
import { Butler } from '@app/services/butler.service';
// import { DemoFilePickerAdapter } from ''
@Component({
  selector: 'app-modal-add-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-add-product.component.html',
  styleUrl: './modal-add-product.component.css'
})

export class ModalAddProductComponent {
  // @ViewChild('uploader', { static: true }) uploader: FilePickerComponent;


  public captions: UploaderCaptions = {
    dropzone: {
      title: 'Imágenes del producto',
      or: '.',
      browse: 'Cargar',
    },
    cropper: {
      crop: 'Cortar',
      cancel: 'Cancelar',
    },
    previewCard: {
      remove: 'Borrar',
      uploadError: 'error',
    },
  };
  // adapter = new  DemoFilePickerAdapter(this.http,this._butler);
  constructor(
    public global:GlobalService,
    public http:HttpClient,
    public _butler:Butler,
    ){}
}
