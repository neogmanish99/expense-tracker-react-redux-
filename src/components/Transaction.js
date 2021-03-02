import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import{ deleteTransaction} from '../actions/actions'


export const Transaction = ({transaction}) => {
    const dispatch = useDispatch()
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount<0 ? 'minus':'plus'}>
            {transaction.text} <span>{sign}₹{Math.abs(transaction.amount)}</span><button onClick={()=> dispatch(deleteTransaction())} className="delete-btn">x</button>
            </li>
    )
}
