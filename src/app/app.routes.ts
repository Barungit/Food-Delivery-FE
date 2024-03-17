import { Routes } from '@angular/router';
import { RestaurantListingComponent } from './restaurant-listing/components/restaurant-listing.component';
import { FoodCatalogueComponent } from './food-catalogue/components/food-catalogue.component';

export const routes: Routes = [
    { path: '', component:RestaurantListingComponent },
    { path: 'food-catalogue/:id', component: FoodCatalogueComponent }
];
