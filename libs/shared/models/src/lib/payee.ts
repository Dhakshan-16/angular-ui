export interface Payee {
  name: string;
  account: string;
  transit: string;
  fi: string;
  type: string;
  id: string;
  currency: 'CAD' | 'USD';
}