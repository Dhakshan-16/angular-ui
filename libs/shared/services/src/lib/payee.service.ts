import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Payee } from '@bfi/shared/models';

@Injectable({
  providedIn: 'root'
})
export class PayeeService {
  getPayees(): Observable<Payee[]> {
    const Payees: Payee[] = [
      { id: "1234", currency: "CAD", name: '', fi: '', transit: '', account: '', type: '' },
      { id: "1235", currency: "CAD", name: '', fi: '', transit: '', account: '', type: '' },
      { id: "1236", currency: "CAD", name: '', fi: '', transit: '', account: '', type: '' },
    ];
    return of(Payees);
  }
}
