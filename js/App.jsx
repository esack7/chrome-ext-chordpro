import React from 'react';
import styled from 'styled-components';
import parse from './parse_chordpro';
import create from './create_chordpro';

const Title = styled.h1`
  margin-left: 10px;
  color: blue;
`;

const SubTitle = styled.p`
  margin-left: 10px;
`

const TextBox = styled.textarea`
  display: block;
  width: 95%;
  max-width: 665px;
  height: 400px;
  margin: 10px
`;

const Button = styled.button`
  margin: 10px;
  padding: 5px;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    if(localStorage.data) {
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
    this.setState({
      songInput: '',
      prevInput: ''
    })
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
      <Title>Simple ChordPro</Title>
      <SubTitle>Utilize and create ChordPro</SubTitle>
      <TextBox 
        onChange={this.handleSongInput}
        value={this.state.songInput}
        placeholder='Type or paste your song here -->'
      />
      <div className='buttonBlock'>
        <Button
          onClick={this.handleParse}
        >ChordPro to Chord/Lyric</Button>
        <Button
          onClick={this.handleCreate}
        >Chord/Lyric to ChordPro</Button>
        <Button
          onClick={this.handleUndo}
        >Undo</Button>
        <Button
          onClick={this.handleClear}
        >Clear</Button>
      </div>
    </div>
  )};
} 

export default App;