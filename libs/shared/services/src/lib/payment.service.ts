import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Account } from '@bfi/shared/models';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  createPayment(from: Account, to: Account, amount: number): Observable<Account[]> {
    if (from && to && from.balance > amount) {
      // ser
    }
    return of([]);
  }

  changeName(account: Account, name: string): void {
    console.log(name);
  }
}
