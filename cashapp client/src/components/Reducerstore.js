export default function reducerA(state={},action) {

    switch(action.type){
    
    case 'actionInit': console.log('catching my action')
    return Object.assign({},state,{uname: action.uname, pwd: action.pwd});
    
    } 
    
    
    }
    
    