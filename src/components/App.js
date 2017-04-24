import React from 'react';
import './app.css';
import Busket from './Busket';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index container-fluid">
        <Busket />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
