import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CurrencyConverterComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curreny-converter';
}
