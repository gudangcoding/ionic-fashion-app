import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  categories: Category[];
  featuredProducts: Product[];
  bestSellingProducts: Product[];

  slideOpts = {
    initialSlide: 0,
    spaceBetween: 0,
    slidesPerView: 2.8,
    slidesOffsetBefore: 6
  };

  constructor(private categoryService: CategoryService, private productService: ProductService) {
  }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    this.featuredProducts = this.productService.getFeaturedProducts();
    this.bestSellingProducts = this.productService.getBestSellingProducts();
  }
}
