import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions/itemAction';

require('./inputitem.css');

class InputItem extends React.Component {
  render() {
    // const actions = this.props.actions;
    let input;
    return (
      <div className="inputitem-component">
        <form
          onSubmit={(e, dispatch) => {
            e.preventDefault();
            if (!input.value.trim()) { return; }
            dispatch(actions.addItem(input.value));
            input.value = '';
          }}>
          <input ref={node => {input = node}}/>
          <button type="submit">Add</button>
        </form>
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
  /* Populated by react-webpack-redux:action */
 // const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(null, mapDispatchToProps)(InputItem);
