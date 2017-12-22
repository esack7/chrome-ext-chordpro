import React from "react";
import { Title, SubTitle, TextBox, Buttons } from "../style/Styles";
import parse from "../utils/parse_chordpro";
import create from "../utils/create_chordpro";

class App extends React.Component {
  constructor(props) {
    super(props);
    if (localStorage.data) {
      this.state = JSON.parse(localStorage.data);
    } else {
      this.state = {
        songInput: "",
        prevInput: "",
      };
    }

    this.handleSongInput = this.handleSongInput.bind(this);
    this.handleParse = this.handleParse.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem("data", JSON.stringify(this.state));
  }

  handleClear() {
    this.setState({
      songInput: "",
      prevInput: "",
    });
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
        <Title>Simple ChordPro</Title>
        <SubTitle>Utilize and create ChordPro</SubTitle>
        <TextBox
          onChange={this.handleSongInput}
          value={this.state.songInput}
          placeholder="Type or paste your song here -->"
        />
        <div className="buttonBlock">
          <Buttons onClick={this.handleParse}>ChordPro to Chord/Lyric</Buttons>
          <Buttons onClick={this.handleCreate}>Chord/Lyric to ChordPro</Buttons>
          <Buttons onClick={this.handleUndo}>Undo</Buttons>
          <Buttons onClick={this.handleClear}>Clear</Buttons>
        </div>
      </div>
    );
  }
}

export default App;
