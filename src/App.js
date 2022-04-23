/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useEffect } from 'react';
import {
  SafeAreaView,
  View
} from 'react-native';
import Main from './MainNavigator/Main'
import { Provider } from 'react-redux'
// import Store from './redux/store';

// const store = Store()
const App = () => {

  return (
    <>
      {/* <Provider store={store} > */}
        <Main />
      {/* </Provider> */}

    </>


  );
}

export default App;

