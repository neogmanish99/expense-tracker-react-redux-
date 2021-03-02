    import React from 'react';
    import {Transaction} from './Transaction';
    import {useSelector,useDispatch} from 'react-redux';

    export const TransactionList = () => {
        const transactions = useSelector(state=>state.transactions);
        return (
            <div>
                <h3>History</h3>
        <ul  className="list">
        {transactions.map(transaction=>(<Transaction key={transaction.id} transaction={transaction}/>))}
            </ul>
            </div>
        )
    }
