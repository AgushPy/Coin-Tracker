import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CoinsStack from 'Crypto_Tracker/src/components/coins/CoinsStack';

function App() {
  return (
    <NavigationContainer>
      <CoinsStack />
    </NavigationContainer>
  );
}

export default App;
