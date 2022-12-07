import {createStore, combineReducers} from 'redux';
import initialState from './initalState';
import listsReducer from './ListRedux';
import columnsReducer from './ColumRedux'
import cardsReducer from './CardRedux'
import searchStringReducer from './SearchStringRedux';



const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  export default store;




