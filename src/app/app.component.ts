import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/components/header.component';
import { RestaurantListingComponent } from './restaurant-listing/components/restaurant-listing.component';
import { FoodCatalogueComponent } from './food-catalogue/components/food-catalogue.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Food-Delivery-App';
}
