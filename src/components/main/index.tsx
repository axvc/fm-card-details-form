import React from 'react';
import * as ST from './styled';
import Background from 'assets/images/bg-main-desktop.png';
import FrontCard from 'assets/images/bg-card-front.png';
import BackCard from 'assets/images/bg-card-back.png';

const App = () => {
  return (
    <ST.App className="App">
      <ST.Background image={Background} />
      <ST.FrontCard image={FrontCard} />
      <ST.BackCard image={BackCard} />
    </ST.App>
  );
};

export default App;
