import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from './account.service';
import { PayeeService } from './payee.service';
import { PaymentService } from './payment.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    AccountService,
    PayeeService,
    PaymentService,
  ],
})
export class SharedServicesModule {}
