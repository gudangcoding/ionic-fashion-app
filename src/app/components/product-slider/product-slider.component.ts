import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],
})
export class ProductSliderComponent {

  @Input() products: Product[];

  productsSlideOpts = {
    initialSlide: 0,
    spaceBetween: 0,
    slidesPerView: 2.2,
    slidesOffsetBefore: 5
  };

}
