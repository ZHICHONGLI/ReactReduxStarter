import React from 'react';
import { connect} from 'react-redux';
// import cssmodules from 'react-css-modules';
require('./busket.css');

class Busket extends React.Component {

  render() {
    return (
      <div className="busket-component">
        <p id="busket">Busket</p>
        <div className="row taskheader">
          <div className="col-md-6">
            <p>Current:</p>
            <p className="headernote">X Left</p>
          </div>
          <div className="col-md-6">
            <p>Done:</p>
            <p className="headernote">Y Finished</p>
          </div>
        </div>
        <div className="row taskbody container-fluid">
          <div className="tasklist">
            <p>EMPTY</p>
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

export default Busket;
