import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  body{
    background: linear-gradient(#8ee8e8, #f5f5f5);
  }
  `]
})
export class AppComponent {
  title = 'pokedex';
}
