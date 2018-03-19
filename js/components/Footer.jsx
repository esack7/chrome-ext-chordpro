import React from 'react';
import { Foot, FootText, NonHyper } from '../style/Styles';

const Footer = () => (
  <Foot>
    <FootText>
      Created and designed by <NonHyper href="https://github.com/esack7" target="_blank">Isaac Heist</NonHyper>
    </FootText>
    <FootText>version 1.0.4</FootText>
  </Foot>
);

export default Footer;