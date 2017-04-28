import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions/itemAction';

require('./inputitem.css');

class InputItem extends React.Component {
  test() {
    console.dir(this.props);
  }
  render() {
    // const actions = this.props.actions;
    let input;
    return (
      <div className="inputitem-component row">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!input.value.trim()) { return; }
            (actions.addItem(input.value));
            input.value = '';
          }}>
          <textarea id="inputarea" type="text" className="form-control" rows="2" ref={node => {input = node}}/>
          <button type="submit" className="btn btn-success">Add</button>
        </form>
        <button onClick={() => this.test()}>test</button>
      </div>
    );
  }
}

InputItem.displayName = 'InputItem';
InputItem.propTypes = {};
InputItem.defaultProps = {};

function mapStateToProps(state) { // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = {};
  return props;
}
function mapDispatchToProps(dispatch) {
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(null, mapDispatchToProps)(InputItem);
