class BankAccount {
  public readonly userId: number;
  public userName: string;
  protected userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
  private addBalance(Balance: number) {
    this.userBalance = this.userBalance + Balance;
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    this.userBalance;
  }
}

const bokaBhaiAccount = new BankAccount(54, "Boka", 56454);
bokaBhaiAccount.addBalance(5234);
bokaBhaiAccount.addBalance(100);
console.log(bokaBhaiAccount);
