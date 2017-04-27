// import moduleName from '';

// const prefix = 'item/';

const actions = {
  addItem: newItem => ({
    type: 'item/ADD_ITEM',
    payload: newItem
  }),

  beginDoItem: () => ({
    type: 'item/BEGIN_DO_ITEM'
  }),

  doneDoItem: detail => ({
    type: 'item/DONE_DO_ITEM',
    payload: detail
  }),

  doItem: id => ({
    type: 'item/DO_ITEM',
    payload: id
  })

};

export default actions;
