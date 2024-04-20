import { Component } from '@angular/core';
import { GlobalService } from '@app/services/global.service';
import { TopSaleComponent } from '../top-sale/top-sale.component';
import { DealComponent } from '../deal/deal.component';
import { PopularComponent } from '../popular/popular.component';
import { SpecialGridComponent } from '../special-grid/special-grid.component';
import { SliderComponent } from '../slider/slider.component';
import { BannersComponent } from '../banners/banners.component';
import { CategoriesComponent } from '../categories/categories.component';
import { CortinaComponent } from '../cortina/cortina.component';
import { CommonModule } from '@angular/common';
import { PopuleriComponent } from '../populeri/populeri.component';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [
    CommonModule,
    TopSaleComponent,
    DealComponent,
    PopularComponent,
    SpecialGridComponent,
    SliderComponent,
    BannersComponent,
    CategoriesComponent,
    CortinaComponent,
    PopuleriComponent
  ],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css',
})
export class UserHomeComponent {
  constructor(public global: GlobalService) {}
}
