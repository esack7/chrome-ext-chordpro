import React from 'react';
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
    const { importPdf } = this.state;
    this.setState({ importPdf: !importPdf });
  }

  handleTransposeClick() {
    const { transpose } = this.state;
    this.setState({ transpose: !transpose });
  }

  render() {
    const { importPdf, transpose } = this.state;
    BaseStyles();
    if (importPdf) {
      return (
        <AppContain>
          <Header />
          <ImportPdf goBack={this.handleImportPdfClick} />
          <Footer />
        </AppContain>
      );
    }

    if (transpose) {
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
          importPdfClick={this.handleImportPdfClick}
        />
        <Footer />
      </AppContain>
    );
  }
}

export default App;
