import React from 'react';

require('./listitem.css');

class ListItem extends React.Component {

  render() {
    return (
      <div className="listitem-component row vertical-center">
        <div className="col-md-2">
          image
        </div>
        <div className="col-md-8">
          <div className="vertical-center itemhead">Task #1</div>
          <div className="vertical-center itembody">Task Detail</div>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary">Complete</button>
        </div>
      </div>
    );
  }
}

ListItem.displayName = 'ListItem';
ListItem.propTypes = {};
ListItem.defaultProps = {};

export default ListItem;
