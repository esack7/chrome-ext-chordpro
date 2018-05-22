import React from 'react';
import PropTypes from 'prop-types';
import StreamObj from '../utils/streamObj';
import unzip from '../utils/unzip';
import handleText from '../utils/handleText';
import fileReader from '../utils/fileReader';
import { Setting, Buttons } from '../style/Styles';

class ImportPdf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const { files } = e.target;
    fileReader(files[0])
    .then(songBuff => new StreamObj(songBuff))
    .then(stream => unzip(stream.primero))
    .then(unzipped => unzipped.split('ET').map(idx => idx.split('BT')[1]))
    .then(charArr => this.setState({
      text: handleText(charArr)
    }))
    .then(() => console.log(this.state))
  }

  render() {
    return (
      <Setting>
        <h1>This is ImportPdf</h1>
        <input 
          type="file"
          name="importPdf"
          onChange={this.handleChange}/>
        <Buttons onClick={this.props.goBack}>Go Back</Buttons>
      </Setting>
    );
  }
}

ImportPdf.propTypes = {
  goBack: PropTypes.func.isRequired,
}

export default ImportPdf;