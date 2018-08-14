import styled, { injectGlobal } from 'styled-components';
import reset from './Reset';

const BaseStyles = () => injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Permanent+Marker');
  ${reset};
`;

const AppContain = styled.div`
  max-width: 700px;
  background: hsl(220, 13%, 18%);
`;

const Title = styled.h1`
  margin: 10px;
  color: hsl(207, 82%, 66%);
  font-size: 48px;
  font-family: 'Permanent marker', cursive;
  display: inline;
`;

const SubTitle = styled.p`
  font-size: 18px;
  color: hsl(220, 14%, 71%);
  margin-left: 10px;
  display: inline;
`;

const TextBox = styled.textarea`
  background: black;
  color: white;
  display: inline-block;
  width: 75%;
  max-width: 665px;
  height: 400px;
  margin: 10px;
  font-family: Consolas, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
`;

const Aside = styled.aside`
  display: inline-block;
  vertical-align: top;
  width: 17%;
  height: 406px;
  margin: 10px;
`;

const Buttons = styled.button`
  margin: 10px;
  padding: 5px;
  width: 99px;
  border-radius: 10px;
`;

const NonHyper = styled.a`
  color: hsl(220, 14%, 71%);
  text-decoration: inherit;
`;

const Foot = styled.div`
  height: 40px;
  background: hsl(207, 35%, 36%);
  color: hsl(220, 14%, 71%);
`;

const FootText = styled.h3`
  font-size: 17px;
  text-align: center;
`;

const Setting = styled.div`
  height: 410px;
  margin: 10px;
`;

const Explain = styled.h1`
  font-size: 20px;
  text-align: center;
  color: #fff;
  padding-top: 25px;
  padding-bottom: 75px;
`;

const FileInput = styled.input`
  display: block;
  padding: 50px;
  border: solid #fff 1px;
  margin: auto;
  margin-bottom: 75px;
  background-color: hsl(220, 14%, 71%);
`;

const Label = styled.label`
  color: hsl(220, 14%, 71%);
  display: inline-block;
  text-align: center;
  padding: 5px;
`;

const TransposeDiv = styled.div`
  border: 2px solid hsl(220, 14%, 71%);
  width: 125px;
  display: table-cell;
  padding: 2px;
`;
export {
  BaseStyles,
  AppContain,
  Title,
  SubTitle,
  TextBox,
  Aside,
  Buttons,
  NonHyper,
  Foot,
  FootText,
  Setting,
  Explain,
  FileInput,
  Label,
  TransposeDiv,
};
