import React from 'react';

require('./listitem.css');

class ListItem extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.state !== this.props.state;
  }
  render() {
    let { state, actions } = this.props;
    let mockState = {
      id: 1,
      detail: 'first'
    };

    let mockActions = {
      doItem: id => console.log('doItem: ' + id)
    };

  //  state = mockState; actions = mockActions;

    if (state.completed) return null;

    return (
      <div className="listitem-component row vertical-center">
        <div className="col-md-2">
          image
        </div>
        <div className="col-md-8">
          <div className="vertical-center itemhead">Task #{state.id}</div>
          <div className="vertical-center itembody">Task Detail: {state.detail}</div>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary" onClick={() => actions.doItem(state.id)}>Complete</button>
        </div>
      </div>
    );
  }
}

ListItem.displayName = 'ListItem';
ListItem.propTypes = {};
ListItem.defaultProps = {};

export default ListItem;
