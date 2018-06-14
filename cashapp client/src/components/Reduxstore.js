import { creatStore } from 'redux';
import { uname, pwd } from './store';
import { reducer } from './reducer/reducer';

const initialStore = {

uname: uname,
pwd: pwd


}


const store = createStore(reducer,initialStore);

export default store;