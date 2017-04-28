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
        if(state.id !== action.payload){
            console.log(state);
            console.log(action);
            return state
        }else{
          let newItem = Object.assign({}, state, {
            completed: !state.completed
          });
          console.log('reduc_sub_fn');
          console.log(newItem);
        return newItem
        }
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
          let newState = Object.assign({}, state, {items: newItems});
          console.log('reducer add');
        return newState;
        case 'DO_ITEM':
        // return state.items.map(t => item(t, action))
        //    let newItem = state.items.map(t => item(t, action));

        console.log('reducer do');
            newItems = state.items.map(t => item(t, action));
            newState = Object.assign({}, state, {items: newItems});
        console.dir(newState);
        return newState;
        default:
        return state
    }
};