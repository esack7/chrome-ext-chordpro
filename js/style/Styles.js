import styled from 'styled-components';

const AppContain = styled.div`
  max-width: 700px;
  background: hsl(220, 13%, 18%);
`;

const Foot = styled.div`
  background: hsl(207, 35%, 36%);
  color: hsl(220, 14%, 71%);
`;

const Title = styled.h1`
  margin-left: 10px;
  color: hsl(207, 82%, 66%);
`;

const SubTitle = styled.p`
  font-size: 18px;
  color: hsl(220, 14%, 71%);
  margin-left: 10px;
`;

const TextBox = styled.textarea`
  background: black;
  color: white;
  display: block;
  width: 95%;
  max-width: 665px;
  height: 400px;
  margin: 10px;
`;

const Buttons = styled.button`
  margin-left: 10px;
  padding: 5px;
`;

export { AppContain, Foot, Title, SubTitle, TextBox, Buttons };
