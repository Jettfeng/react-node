import React from 'react';
export default function imoocFrom (Comp) {
  return class WrapperComp extends React.Component {
    constructor (props) {
      super (props);
      this.state = {};
      this.handleChange = this.handleChange.bind (this);
    }
    handleChange (key, val) {
        console.log(`key=${key};val=${val}`);
        
      this.setState ({
        [key]: val,
      });
    }

    render () {
      return (
        <Comp
          handleChange={this.handleChange}
          state={this.state}
          {...this.props}
        />
      );
    }
  };
}
