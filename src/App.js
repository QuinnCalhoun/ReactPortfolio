import React from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router } from "react-router-dom";
import { HeaderBar, ContentBody } from './Components/index'



function App() {

  return (
  
      <Router>
        <Container
        content={[
          <HeaderBar key='0' />,
          <ContentBody key='1' />]} />
      </Router>

  );
}

export default App;
