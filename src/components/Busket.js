import React from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ListItem from './ListItem';
import actions from '../actions/itemAction';
import InputItem from './InputItem';


require('./busket.css');

class Busket extends React.Component {

    /**
   * get current status of items
   * qty of left and done
   */
  getStatus() {
    let status = {
      current: {
        qty: 0
      },
      done: {
        qty: 0
      }
    };
    this.props.Busket.items.map(item => {
      const selector = item.completed ? 'done' : 'current';
      status[selector].qty += 1;
    });                  
    return status;
  }

  /**
   * get current unfinished items
   */
  getItem(items) {
    let data = [];
    items.map(item => {
      if (!item.completed) {
        data.push(<ListItem
          state={item}
          actions={actions}
          key={item.id} />);
      }
    });

    if (!data.length) {
      data.push(<div className="emptylist">Empty List</div>);
    }

    return data;
  }

  render() {
    let { Busket, actions } = this.props;
    let { items } = Busket;
    let status = this.getStatus();

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
            { this.getItem(items) }
          </div>
        </div>
        <div className="row taskfooter container-fluid">
          <InputItem actions={actions}/>
        </div>
        <button onClick={() => console.log(this.props)}>test in busket</button>
        <button onClick={() => actions.addItem('test adding task')}>test add</button>
        <button>Show All</button>
      </div>
    );
  }
}

Busket.displayName = 'Busket';
Busket.propTypes = {};
Busket.defaultProps = {};

function select(state) {
  return {
    Busket: state.Busket
  };
}

const mapStateToProps = state => ({
  Busket: state.Busket
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Busket);
