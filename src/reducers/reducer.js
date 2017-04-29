const initialState = {
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
        if(state.id !== action.payload){
            return state
        }else{
          let newItem = Object.assign({}, state, {
            completed: !state.completed
          });
        return newItem
        }
        default:
            return state
    }
};

export default (state = initialState, action) => {
        switch (action.type) {
        case 'ADD_ITEM':
        console.log('reducer_add');
         let newItems = [
            ...state.items,
            item(undefined, action)
        ];
          let newState = Object.assign({}, state, {items: newItems});
        return newState;

        case 'DO_ITEM':
            newItems = state.items.map(t => item(t, action));
            newState = Object.assign({}, state, {items: newItems});
        return newState;
        default:
        return state
    }
};