import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-history-section',
  standalone: true,
  imports: [CommonModule,MatDialogModule,MatButtonModule],
  templateUrl: './history-section.component.html',
  styleUrl: './history-section.component.scss'
})
export class HistorySectionComponent {
  history: any[] = [];

  constructor(){
    const storedHistory = localStorage.getItem('conversionHistory');
    if (storedHistory) {
      this.history = JSON.parse(storedHistory);
    }
  }

  clearConversionHistory() {
    localStorage.removeItem('conversionHistory');
  }
}
