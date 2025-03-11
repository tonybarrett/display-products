import { Component } from '@angular/core';
import { DisplayComponent } from './components/display/display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'display-products';
}
