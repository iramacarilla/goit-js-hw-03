/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */
  
  const account = {
    // Текущий баланс счета
    balance: 0,
   
  
    // История транзакций
    transactions: [],
  
    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        return {id: this.transactions.length, amount, type};  
    },
  
    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.balance += amount;
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);   
    },
  
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        if (amount <= this.balance){
        this.balance -= amount;
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transaction);}
        else{
        console.log("снятие такой суммы не возможно, недостаточно средств"); }
    },
  
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance;
    },
  
    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        let transactionResult;
        for (const transaction of this.transactions){
        if (transaction.id === id) { 
            transactionResult = {...transaction};   
    }}
    return transactionResult;
      //  return transactionResult ;
    },
        
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let sum = 0;
        for (let transaction of this.transactions){
        if (transaction.type === type)
        { sum+= transaction.amount;
        }
    }
    return  sum},
};

  console.log(account.createTransaction(25, Transaction.DEPOSIT));
  account.deposit(40);
  account.deposit(40);
  account.withdraw(20);
  console.log(account.getBalance());
  console.log(account.getTransactionDetails(1));
  console.log(account.getTransactionTotal(Transaction.DEPOSIT));
  
 