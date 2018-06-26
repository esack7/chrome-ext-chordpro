import React from 'react';
import PropTypes from 'prop-types';
import { Setting, Buttons } from '../style/Styles';

class Transpose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Setting>
        <h1>This is transpose</h1>
        <Buttons onClick={this.props.goBack}>Go Back</Buttons>
      </Setting>
    );
  }
}

Transpose.propTypes = {
  goBack: PropTypes.func.isRequired,
}

export default Transpose;
