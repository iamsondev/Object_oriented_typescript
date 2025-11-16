class BankAccount {
  public readonly userId: number;
  public userName: string;
  protected userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
  // add balance in a general functional way
  //   addBalance(balance: number) {
  //     this.userBalance = this.userBalance + balance;
  //   }
  // in stead of general functional way, its better to use "Setter"
  set addBalance(amount: number) {
    this.userBalance = this.userBalance + amount;
  }

  // get for in a general functional way
  // getBalance() {
  //   return this.userBalance;
  // }

  // its better to use "Getter"
  get getBalance() {
    return this.userBalance;
  }
}

const bokaBhaiAccount = new BankAccount(554, "Boka", 100);
bokaBhaiAccount.addBalance = 700;
bokaBhaiAccount.addBalance = 700;
console.log(bokaBhaiAccount);
