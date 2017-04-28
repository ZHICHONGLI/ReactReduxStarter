 let nextId = 1;

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

export default actions;
