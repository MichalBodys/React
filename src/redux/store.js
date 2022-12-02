import {createStore} from 'redux';
import shortid from 'shortid';
import initialState from './initalState';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({cards, searchString}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getAllColumns = ({columns}) => {return  columns}

export const getAllLists = ({lists}) => {return lists;}

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({type: 'ADD_CARD', payload})
export const updateSearchString = payload => ({type: 'UPDATE_SEARCHSTRING', payload})


const reducer = (state, action) => {

  state.searchString = '';

  switch (action.type) {
    case 'ADD_COLUMN':
      return{ ...state, columns: [...state.columns, {...action.payload, id: shortid() }]};
      case 'ADD_CARD':
        return{ ...state, cards: [...state.cards, {...action.payload, id: shortid() }]};
        case 'UPDATE_SEARCHSTRING' :
          return{...state, searchString: action.payload}
          default:
            break;
          }
          return state;
        };

        const store = createStore(
          reducer,
          initialState,
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
          );
          export default store;




