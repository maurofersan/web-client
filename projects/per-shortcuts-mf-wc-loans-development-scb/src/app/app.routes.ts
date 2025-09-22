import { Routes } from '@angular/router';
import { SelectLoanInstallmentComponent } from './features/installments/select-loan-installment.component';
import { LoanSummaryComponent } from './features/summary/loan-summary.component';

export const routes: Routes = [
  { path: 'installments', component: SelectLoanInstallmentComponent },
  { path: 'summary', component: LoanSummaryComponent },
  { path: '', redirectTo: 'installments', pathMatch: 'full' },
];

export const RemoteModule = routes;
