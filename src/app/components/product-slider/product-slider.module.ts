import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSliderComponent } from './product-slider.component';
import { IonicModule } from '@ionic/angular';
import { ProductCardModule } from '../product-card/product-card.module';

@NgModule({
    declarations: [ProductSliderComponent],
    imports: [CommonModule, IonicModule, ProductCardModule],
    exports: [ProductSliderComponent],
})
export class ProductSliderModule { }
