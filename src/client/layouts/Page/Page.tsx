import React from 'react';

export class Page extends React.Component {
  componentDidMount = () => {
    //
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
