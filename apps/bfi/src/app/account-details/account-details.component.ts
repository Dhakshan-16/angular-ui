import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Account } from '@bfi/shared/models';
import { CommonModule } from '@angular/common';
import { AccountService } from 'libs/shared/services/src/lib/account.service';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bfi-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailsComponent implements OnInit{
  account: any;
  accounts$: Observable<Account[]> = of([]);
  accId: unknown =  null;

  
  constructor(private accountService: AccountService, private route: ActivatedRoute) {}
  
  accounts: Account[] = [];
  accountsFilter = '';

  ngOnInit(): void {
    this.accId = this.route.snapshot.paramMap.get('id');
    console.log(this.accId);
    this.accountService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    });
    this.account = this.filterAccounts(this.accounts)[0];
    console.log(this.account);
  }

  filterAccounts(accounts: Account[]) {
    return accounts.filter(acc => acc.id === this.accId );
  }
}
