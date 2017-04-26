//import moduleName from '';

const prefix = 'item/';

let actions = {
    addItem: ()=> (dispatch, getstate) => {
        if(getState().isDoing)
            return;

        dispatch(actions.beginDoItem());

        ajax({
            url: '/itemBusket/addItem',
            method: 'GET'
        }).done(data => {
            dispatch(actions.doneDoItem(data.detail))
        }).fail(error => {
            dispatch(actions.failDoItem(error));
        })
    },

    beginDoItem: () => ({
        type: 'item/BEGIN_DO_ITEM'
    }),

    doneDoItem: detail => ({
        type: 'item/DONE_DO_ITEM',
        payload: detail
    }),

    failDoItem: err => ({
        type: 'item/FAIL_DO_ITEM',
        payload: new Erroe(err),
        error: true
    }),

    doItem: id => ({
        type: 'item/DO_ITEM',
        payload: id
    })

};

export default actions;
