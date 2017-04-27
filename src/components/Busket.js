import React from 'react';
import { connect} from 'react-redux';
// import cssmodules from 'react-css-modules';
import ListItem from './ListItem';
import actions from '../actions/itemAction';


require('./busket.css');

class Busket extends React.Component {
  render() {
    let { state, actions } = this.props;

    const mockState = {
      isDoing: false,
      newItemId: 2,
      items: [
        {
          id: 1,
          detail: 'first task',
          completed: false
        }
      ]
    };

    state = mockState;

    let status = {
      current: {
        qty: 0
      },
      done: {
        qty: 0
      }
    };
    state.items.map((item) => {
      const selector = item.completed ? 'done' : 'current';
      status[selector].qty += 1;
    });
    return (
      <div className="busket-component">
        <p id="busket">Busket</p>
        <div className="row taskheader">
          <div className="col-md-6">
            <p>Current:</p>
            <p className="headernote">{status.current.qty} Left</p>
          </div>
          <div className="col-md-6">
            <p>Done:</p>
            <p className="headernote">{status.done.qty} Finished</p>
          </div>
        </div>
        <div className="row taskbody container-fluid">
          <div className="tasklist">
            { state.items.map(item =>
              <ListItem
                state={item}
                actions={actions}
                key={item.id}
              />
            )}
          </div>
        </div>
        <div className="row taskfooter container-fluid">
          <button onClick={() => actions.addItem()}>Add</button>
        </div>

      </div>
    );
  }
}

Busket.displayName = 'Busket';
Busket.propTypes = {};
Busket.defaultProps = {};

function select(state) {
  return {
    state: state.Busket
  };
}

export default connect(select)(Busket);
