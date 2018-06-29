import React from 'react';
import PropTypes from 'prop-types';
import { Setting, Buttons } from '../style/Styles';

class Transpose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { goBack } = this.props;
    return (
      <Setting>
        <h1>This is transpose</h1>
        <Buttons onClick={goBack}>Go Back</Buttons>
      </Setting>
    );
  }
}

Transpose.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default Transpose;
