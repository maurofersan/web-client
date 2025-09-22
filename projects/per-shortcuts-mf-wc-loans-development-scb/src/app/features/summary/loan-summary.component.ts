import { Component } from '@angular/core';

@Component({
  selector: 'loans-loan-summary',
  standalone: true,
  templateUrl: './loan-summary.component.html',
  styleUrls: ['./loan-summary.component.scss'],
})
export class LoanSummaryComponent {
  loanAmount = 10000;
  selectedInstallment = 12;
}
