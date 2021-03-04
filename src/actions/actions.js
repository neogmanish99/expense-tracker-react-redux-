
    //actions
   export  function deleteTransaction(id){
        return{
            type:'DELETE_TRANSACTIONS',
            payload: id
        }

    }
    
    export function addTransaction(transaction){
        return{
            type:'ADD_TRANSACTIONS',
            payload: transaction
        }
    }

// export const deleteTransaction(id) => (dispatch)=>{}