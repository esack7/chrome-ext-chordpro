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
        prevInput: ''
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
    this.setState({ prevInput: this.state.songInput })
    this.setState({ songInput: '' });
  }

  handleParse() {
    this.setState({ prevInput: this.state.songInput });
    this.setState({ songInput: parse(this.state.songInput) });
  }

  handleCreate() {
    this.setState({ prevInput: this.state.songInput });
    this.setState({ songInput: create(this.state.songInput) });
  }

  handleUndo() {
    this.setState({ songInput: this.state.prevInput });
  }

  handleSongInput(e) {
    this.setState({ songInput: e.target.value });
  }

  render() {
    return (
      <div>
        <Aside>
          <Buttons onClick={this.handleParse}>ChordPro to Chord/Lyric</Buttons>
          <Buttons onClick={this.handleCreate}>Chord/Lyric to ChordPro</Buttons>
          <Buttons onClick={this.props.importPdfClick}>Import PDF</Buttons>
          <Buttons onClick={this.handleUndo}>Undo</Buttons>
          <Buttons onClick={this.handleClear}>Clear</Buttons>
          {/* <Buttons onClick={this.props.transposeClick}>Transpose</Buttons> */}
        </Aside>
        <TextBox
          onChange={this.handleSongInput}
          value={this.state.songInput}
          placeholder="Type or paste your song here -->"
        />
      </div>
    );
  }
}

SongPad.propTypes = {
  importPdfClick: PropTypes.func.isRequired,
  // transposeClick: PropTypes.func.isRequired
}

export default SongPad;