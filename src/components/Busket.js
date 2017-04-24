import React from 'react';
import { connect} from 'react-redux';
// import cssmodules from 'react-css-modules';
import ListItem from './ListItem';

require('./busket.css');

class Busket extends React.Component {
  render() {
    let { state } = this.props;

    let mockState = {
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

    let stats = {
      current: {
        qty: 0
      },
      done: {
        qty: 0
      }
    };
    state.items.map((item) => {
      const selector = item.completed ? 'done' : 'current';
      stats[selector].qty += 1;
    });
    return (
      <div className="busket-component">
        <p id="busket">Busket</p>
        <div className="row taskheader">
          <div className="col-md-6">
            <p>Current:</p>
            <p className="headernote">{stats.current.qty} Left</p>
          </div>
          <div className="col-md-6">
            <p>Done:</p>
            <p className="headernote">{stats.done.qty} Finished</p>
          </div>
        </div>
        <div className="row taskbody container-fluid">
          <div className="tasklist">
            { state.items.map(item => <ListItem state={item} />)}
          </div>
        </div>
        <div className="row taskfooter container-fluid">
          <button>Add</button>
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
