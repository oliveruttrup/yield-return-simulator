import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from '../result/result.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ResultComponent, FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  showResults = false;
  purchasePrice: number = 0;
  monthlyRent: number = 0;
  annualRentalFee: number = 0;
  results: { year: number; monthlyNetIncome: number; returnPercentage: number }[] = [];

  calculateResults() {
    const fees = [0.30, 0.25, 0.20];
    this.results = [];

    for (let year = 1; year <= 3; year++) {
      const feeRate = fees[year - 1];

      const monthlyNetIncome = this.monthlyRent - (this.monthlyRent * feeRate);
      const annualNetIncome = (monthlyNetIncome * 12) - this.annualRentalFee;
      const returnPercentage = (annualNetIncome / this.purchasePrice) * 100;

      this.results.push({
        year: year,
        monthlyNetIncome: parseFloat(monthlyNetIncome.toFixed(2)),
        returnPercentage: parseFloat(returnPercentage.toFixed(2))
      });
    }

    this.showResults = true;
  }
}
