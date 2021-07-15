import transactions from './data/transactions';

export const getTransactions = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>resolve(transactions), 500);
    })
}

export const postTransaction = (amount) => {
    return new Promise((resolve, reject) => {
        transactions.push({id: Math.floor(Math.random()*1000), transdate: new Date().toLocaleDateString(), amount: amount});
        resolve(transactions);
    });
}