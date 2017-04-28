const initialState = {
//  newItemId: 2,
  items: [
    {
      id: 1,
      detail: 'first task',
      completed: false
    }
  ]
};

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

export default (state = initialState, action) => {
        switch(action.type){
        case 'ADD_TODO':
          let newItems = [
            ...state.items,
            item(undefined, action)
        ];
          let newState = Object.assign({}, state, items : newItems);
        return newState;
        case 'DO_ITEM':
        return state.items.map(t => item(t, action))
        default:
        return state
    }
};