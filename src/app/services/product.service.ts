import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    getProducts(): Product[] {
        return [
            {
                id: 1,
                name: 'Girl Blck Dress',
                price: 15.36,
                imageUrl: 'assets/images/products/product-1.jpg',
                liked: false,
            },
            {
                id: 2,
                name: 'Men T-Shirt',
                price: 45.36,
                imageUrl: 'assets/images/products/product-2.jpg',
                liked: true,
            },
            {
                id: 3,
                name: 'Women watch',
                price: 12.9,
                imageUrl: 'assets/images/products/product-3.jpg',
                liked: false,
            },
            {
                id: 4,
                name: 'Diamond chain',
                price: 50.5,
                imageUrl: 'assets/images/products/product-4.jpg',
                liked: false,
            },
            {
                id: 5,
                name: 'Best shoes',
                price: 100.0,
                imageUrl: 'assets/images/products/product-5.jpg',
                liked: true,
            },
            {
                id: 6,
                name: 'Girl Dress',
                price: 43.5,
                imageUrl: 'assets/images/products/product-6.jpeg',
                liked: true,
            },
            {
                id: 7,
                name: 'Boy Suit',
                price: 30.5,
                imageUrl: 'assets/images/products/product-7.jpg',
                liked: true,
            },
            {
                id: 8,
                name: 'Fashion Jeans',
                price: 16.5,
                imageUrl: 'assets/images/products/product-8.jpg',
                liked: true,
            },
            {
                id: 9,
                name: 'Hoddie T-shirt',
                price: 20.0,
                imageUrl: 'assets/images/products/product-9.png',
                liked: true,
            },
            {
                id: 10,
                name: 'Air max mens shoes',
                price: 55.0,
                imageUrl: 'assets/images/products/product-10.jpg',
                liked: true,
            },
        ];
    }

    getFeaturedProducts(): Product[] {
        return this.getProducts().slice(3, 8);
    }

    getBestSellingProducts(): Product[] {
        return this.getProducts().slice(0, 5);
    }
}
