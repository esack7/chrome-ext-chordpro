import React from "react";
import { BaseStyles, AppContain } from '../style/Styles';
import Header from './Header';
import SongPad from './SongPad';
import Footer from './Footer';
import Transpose from './Transpose';
import ImportPdf from './ImportPdf';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transpose: false,
      importPdf: false,
    };
    this.handleTransposeClick = this.handleTransposeClick.bind(this);
    this.handleImportPdfClick = this.handleImportPdfClick.bind(this);
  }

  handleImportPdfClick() {
    this.setState({ importPdf: !this.state.importPdf })
  }

  handleTransposeClick() {
    this.setState({ transpose: !this.state.transpose })
  }

  render() {
    BaseStyles();
    if (this.state.importPdf) {
      return (
        <AppContain>
          <Header />
          <ImportPdf
            goBack={this.handleImportPdfClick} />
          <Footer />
        </AppContain>
      );
    }

    if (this.state.transpose) {
      return (
        <AppContain>
          <Header />
          <Transpose goBack={this.handleTransposeClick} />
          <Footer />
        </AppContain>
      );
    }

    return (
      <AppContain>
        <Header />
        <SongPad
          transposeClick={this.handleTransposeClick}
          importPdfClick={this.handleImportPdfClick} />
        <Footer />
      </AppContain>
    );
  }
}

export default App;
