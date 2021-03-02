import {combineReducers} from 'redux';
import transactionReducer from './expenseReducer';

const combine = combineReducers({
    transactions: transactionReducer,
})
 export default combine;