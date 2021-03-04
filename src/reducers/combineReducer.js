import {combineReducers} from 'redux';
import transactionReducer from './expenseReducer';

const combine = combineReducers({
    expenses: transactionReducer,
})
 export default combine;