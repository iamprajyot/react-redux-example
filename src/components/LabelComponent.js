import React, { Component } from 'react';

class LabelComponent extends Component {
  render() {
    let errorComp = null
    if(this.props.isError){
      errorComp = <span className="errorText">This field is required</span>;
    }
    return (
      <span className="lableCompDiv">
        <label className={this.props.isError ? 'errorFont' : 'successFont'}>{this.props.labelText}</label>
        {errorComp}
      </span>
    );
  }
}

export default LabelComponent;