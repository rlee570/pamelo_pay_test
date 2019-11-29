export default class Transaction {
  id: Number;
  currency: string;
  amount: Number;
  user: string;
  date: string;
  toAccount: string;

  constructor(
    id: Number,
    currency: string,
    amount: Number,
    user: string,
    date: string,
    toAccount: string
  ) {
    this.id = id;
    this.currency = currency;
    this.amount = amount;
    this.user = user;
    this.date = date;
    this.toAccount = toAccount;
  }
}
