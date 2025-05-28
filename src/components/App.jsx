import React from "react";
import { BaseStyles, AppContain } from "../style/Styles";
import Header from "./Header";
import SongPad from "./SongPad";
import Footer from "./Footer";
// import ImportPdf from './ImportPdf';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    // Load saved state when extension starts
    if (window.chrome && chrome.storage) {
      chrome.storage.local.get(["songs"], (result) => {
        if (result.songs) {
          this.setState({ songs: result.songs });
        }
      });

      // Handle extension lifecycle events
      if (chrome.runtime) {
        chrome.runtime.onSuspend.addListener(() => {
          // Save state before extension is suspended
          chrome.storage.local.set({ songs: this.state.songs });
        });
      }
    }
  }

  render() {
    return (
      <div>
        <BaseStyles />
        <AppContain>
          <Header />
          <SongPad songs={this.state.songs} />
          <Footer />
        </AppContain>
      </div>
    );
  }
}

export default App;
