import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatSelectCountryModule,HttpClientModule],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss'
})
export class CurrencyConverterComponent {


}
