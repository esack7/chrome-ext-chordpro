import React from "react";
import { BaseStyles, AppContain } from '../style/Styles';
import Header from './Header';
import SongPad from './SongPad';
import Footer from './Footer';

const App = () => {
BaseStyles();
return (
  <AppContain>
    <Header />
    <SongPad />
    <Footer />
  </AppContain>
);
}

export default App;