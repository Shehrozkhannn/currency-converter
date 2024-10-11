import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { HistorySectionComponent } from '../history-section/history-section.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,HttpClientModule, CommonModule, FormsModule,MatSelectModule,MatProgressSpinnerModule,MatDialogModule,MatSnackBarModule],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss'
})
export class CurrencyConverterComponent {
  amount: any;
  fromCurrency:any;
  toCurrency: any;
  convertedAmount: number | null = null;
  isLoading = false;
  isAmountTouched: boolean = false;
  history: any[] = [];
  currencies: string[] = [
    "AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", 
    "EUR", "GBP", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", 
    "ISK", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", 
    "PLN", "RON","USD"
  ];
  constructor(private currencyService: DataService,public dialog: MatDialog,private snackBar: MatSnackBar) {}

  ngOnInit() {
    
  }

  convert(amountInput:any) {
    if (Number(this.amount) && this.fromCurrency && this.toCurrency) {
      this.isLoading = true;
      this.currencyService.convertCurrency(this.fromCurrency,this.toCurrency,Number(this.amount)).subscribe({
        next: (result) => {
          this.convertedAmount = result.convertedAmount;
          this.saveToHistory(this.amount, this.fromCurrency, this.toCurrency, result.convertedAmount);
          this.snackBar.open('Amount Converted Successfully', 'Close', { duration: 3000 });
          this.isLoading = false;
          this.amount = '';
          this.fromCurrency = '';
          this.toCurrency = '';
          amountInput = amountInput.valid
        },
        error: () => {
          this.snackBar.open('Error fetching conversion data.', 'Close', { duration: 3000 });
          this.isLoading = false;
        }
      });
    }
  }

  saveToHistory(amount: number, from: string, to: string, convertedAmount: number) {
    const newEntry = {
      amount,
      from,
      to,
      convertedAmount,
      date: new Date()
    };
    const history = [];
    history.push(newEntry)
    let conversation:any = localStorage.getItem('conversionHistory');
    conversation = JSON.parse(conversation);
    localStorage.setItem('conversionHistory', JSON.stringify(conversation && conversation.length ? [...conversation , ...history] : history));
  }

  showHistory(){
    const dialogRef = this.dialog.open(HistorySectionComponent);
  }

}
