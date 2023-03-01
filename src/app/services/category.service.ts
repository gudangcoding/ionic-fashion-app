import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    getCategories(): Category[] {
        return [
            {
                title: 'Men',
                image: 'assets/images/categories/men.jpg',
            },
            {
                title: 'Women',
                image: 'assets/images/categories/women.jpg',
            },
            {
                title: 'Kids',
                image: 'assets/images/categories/baby.jpg',
            },
            {
                title: 'Home',
                image: 'assets/images/categories/home.jpg',
            },
        ];
    }
}
