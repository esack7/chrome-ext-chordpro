import React from "react";
import { AppContain } from '../style/Styles';
import Header from './Header';
import SongPad from './SongPad';
import Footer from './Footer';

const App = () => (
  <AppContain>
    <Header />
    <SongPad />
    <Footer />
  </AppContain>
);

export default App;