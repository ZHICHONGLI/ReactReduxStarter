import React from 'react';

require('./inputitem.css');

class InputItem extends React.Component {
  render() {
    const actions = this.props.actions;
    let input;
    return (
      <div className="inputitem-component">
        <form
          onSubmit={e => {
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

export default InputItem;
