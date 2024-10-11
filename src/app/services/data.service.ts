import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3006/api'; 
  // private apiUrl = 'https://currency-api-backend.vercel.app/api'; 

  constructor(private http: HttpClient) { }

  convertCurrency(from: any, to: string, amount: any): Observable<any> {
    const finalAmount = Number(amount)
    return this.http.get(`${this.apiUrl}/convert?from=${from}&to=${to}&amount=${finalAmount}`);
  }
}
