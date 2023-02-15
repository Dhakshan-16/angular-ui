import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
import { Account } from '@bfi/shared/models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accountDetail: Subject<Account> = new Subject<Account>();
  getAccounts(): Observable<Account[]> {
    const accounts: Account[] = [
      { id: "1234", balance: 7500, currency: "cad" },
      { id: "1235", balance: 4500, currency: "cad" },
      { id: "1236", balance: 2102, currency: "usd" },
    ];
    return of(accounts);
  }
  
  public setAccountData(value: Account):void {
    this.accountDetail.next(value);
    this.getAccountData();
  }
    
    
  public getAccountData():Observable<Account> {
    return this.accountDetail;
  }

  
}
