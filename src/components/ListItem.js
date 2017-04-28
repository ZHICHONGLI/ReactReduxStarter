import React from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/itemAction';


require('./listitem.css');

class ListItem extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.state !== this.props.state;
  }
  render() {
    const state = this.props.state;
    const actions = this.props.actions;

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

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(undefined, mapDispatchToProps)(ListItem);
