 let nextId = 2;
/*
const actions = {
  addItem: newItem => ({
    type: 'ADD_ITEM',
    payload: newItem,
    id: nextId++
  }),

  doItem: id => ({
    type: 'DO_ITEM',
    payload: id
  })

};
*/
const actions = {
  addItem: (newItem) => {
    console.log('addItem action');
    const newAction = {
    type: 'ADD_ITEM',
    payload: newItem,
    id: nextId++
  };
    console.log(newAction);
    return newAction
},

  doItem: id => ({
    type: 'DO_ITEM',
    payload: id
  })

};

export default actions;
