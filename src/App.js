/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RouterComponent from './Router';
import configureStore from './store/configureStore';
console.disableYellowBox = true; //Disables the warning in production


const store = configureStore();

export default class App extends Component {
  render() {

    return (

      <Provider store={store}>
        <RouterComponent/>
      </Provider>

    );
  }

}