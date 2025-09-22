import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'loans-select-loan-installment',
  standalone: true,
  templateUrl: './select-loan-installment.component.html',
  styleUrls: ['./select-loan-installment.component.scss'],
})
export class SelectLoanInstallmentComponent {
  installments: number[] = [6, 12, 24, 36];

  constructor(private router: Router) {}

  selectInstallment(installment: number): void {
    console.log('Selected installment:', installment);
    this.router.navigate(['../summary']);
  }
}
