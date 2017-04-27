/* eslint-disable import/newline-after-import */
/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
/* Populated by react-webpack-redux:reducer */
import { combineReducers } from 'redux';

const item = (state = {}, action) => {
    switch(action.type){
        case "ADD_ITEM":
        return {
            id: action.id,
            detail: action.payload,
            completed: false
        }
        case "DO_ITEM":
        if(state.id !== action.id){
            return state
        }
        return Object.assign({}, state, {
            completed: !state.completed
        })
        default:
            return state
    }
};

const items = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
        return [
            ...state,
            item(undefined, action)
        ]
        case 'DO_ITEM':
        return state.map(t => item(t, action))
        default:
        return state
    }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
};

// the combineReducers should be an object
const combined = combineReducers({
    items,
    visibilityFilter
});
// module.exports = combined;
export default combined;
