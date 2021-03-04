const initState ={
    transactions:[
        {id:1, text:'flower',amount:-80 }
    ]
}


const expenseReducer =(state=initState,action)=>{
switch(action.type){
    case "DELETE_TRANSACTIONS":
        return {
            ...state,
            transactions: state.transactions.filter(transaction=>transaction.id !== 
                action.payload)
        }
        
    case "'ADD_TRANSACTIONS":
        return {
            ...state,
            transactions: [action.payload, ...state.transactions]
        }

    default:
        return state;
}
}
export default expenseReducer;