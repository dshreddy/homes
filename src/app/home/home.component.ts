import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  styleUrls: [`./home.component.css`],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city" />
      <button class="primary" type="button">Search</button>
    </form>
    <section class="results">
      <app-housing-location></app-housing-location>
    </section>
  </section>
  `,
  styles: ``
})
export class HomeComponent {

}
