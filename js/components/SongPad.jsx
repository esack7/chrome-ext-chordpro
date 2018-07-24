import React from 'react';
import PropTypes from 'prop-types';
import { TextBox, Buttons, Aside } from '../style/Styles';
import parse from '../utils/parse_chordpro';
import create from '../utils/create_chordpro';

class SongPad extends React.Component {
  constructor(props) {
    super(props);
    if (localStorage.data) {
      this.state = JSON.parse(localStorage.data);
    } else {
      this.state = {
        songInput: '',
        prevInput: '',
      };
    }

    this.handleSongInput = this.handleSongInput.bind(this);
    this.handleParse = this.handleParse.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem('data', JSON.stringify(this.state));
  }

  handleClear() {
    const { songInput } = this.state;
    this.setState({ prevInput: songInput });
    this.setState({ songInput: '' });
  }

  handleParse() {
    const { songInput } = this.state;
    this.setState({ prevInput: songInput });
    this.setState({ songInput: parse(songInput) });
  }

  handleCreate() {
    const { songInput } = this.state;
    this.setState({ prevInput: songInput });
    this.setState({ songInput: create(songInput) });
  }

  handleUndo() {
    const { prevInput } = this.state;
    this.setState({ songInput: prevInput });
  }

  handleSongInput(e) {
    let { value } = e.target;
    // Allows song stings to be pasted directly into SongPad //
    if (value.split('\\r\\n').length > 1) {
      value = value.split('\\r\\n').join('\n');
    }
    if (value.split('\\n').length > 1) {
      value = value.split('\\n').join('\n');
    }
    // ///////////////////////////////////////////////////// //
    this.setState({ songInput: value });
  }

  render() {
    const { importPdfClick } = this.props;
    const { songInput } = this.state;
    return (
      <div>
        <Aside>
          <Buttons onClick={this.handleParse}>ChordPro to Chord/Lyric</Buttons>
          <Buttons onClick={this.handleCreate}>Chord/Lyric to ChordPro</Buttons>
          <Buttons onClick={importPdfClick}>Import PDF</Buttons>
          <Buttons onClick={this.handleUndo}>Undo</Buttons>
          <Buttons onClick={this.handleClear}>Clear</Buttons>
          {/* <Buttons onClick={transposeClick}>Transpose</Buttons> */}
        </Aside>
        <TextBox
          onChange={this.handleSongInput}
          value={songInput}
          placeholder="Type or paste your song here -->"
        />
      </div>
    );
  }
}

SongPad.propTypes = {
  importPdfClick: PropTypes.func.isRequired,
  // transposeClick: PropTypes.func.isRequired,
};

export default SongPad;
