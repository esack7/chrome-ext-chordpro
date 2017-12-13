import React from 'react';
import parse from './parse_chordpro';
import create from './create_chordpro';

const helloStyle = {
  color: 'blue'
}

const textStyle = {
  width: "960px",
  height: "500px",
  margin: '10px'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songInput: '',
      prevInput: ''
    };
    this.handleSongInput = this.handleSongInput.bind(this);
    this.handleParse = this.handleParse.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
  }

  handleParse() {
    this.setState({ prevInput: this.state.songInput });
    this.setState({ songInput: parse(this.state.songInput) });
  }

  handleCreate() {
    this.setState({ prevInput: this.state.songInput });
    this.setState({ songInput: create(this.state.songInput) })
  }

  handleUndo() {
    this.setState({ songInput: this.state.prevInput })
  }

  handleSongInput(e) {
    this.setState({ songInput: e.target.value });
  }

  render () {
    return(
    <div>
      <h1 style= {helloStyle}>Welcome to Simple Chords</h1>
      <p>This app helps those utilizing or creating ChordPro</p>
      <textarea 
        style={textStyle}
        onChange={this.handleSongInput}
        value={this.state.songInput}
        placeholder='Type or paste your song here -->'
      />
      <button
        onClick={this.handleParse}
      >From ChordPro</button>
      <button
        onClick={this.handleCreate}
      >To ChordPro</button>
      <button
        onClick={this.handleUndo}
      >Undo</button>
    </div>
  )};
} 

export default App;