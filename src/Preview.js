import React from 'react';
import './Preview.css';

export default class Preview extends React.Component {
  setHtml() {
    return {__html: this.props.compiled};
  }

  render() {
    return (
      <div className="well well-lg preview" dangerouslySetInnerHTML={this.setHtml()}>
      </div>
    )
  }
}
