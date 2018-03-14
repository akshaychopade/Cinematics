import React, { Component } from "react";
import { Image, View, StyleSheet, StatusBar } from "react-native";
import { Actions } from "react-native-router-flux";

class Splash extends Component {
  getTimerCountDown() {
    setTimeout(() => {
      Actions.NavDrawer();
    }, 2500);
  }

  getTimeRem() {
    return this.state.timeRemaining;
  }

  componentDidMount() {
    this.getTimerCountDown();
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <StatusBar backgroundColor="#3EC0F8" barStyle="light-content" />
        </View>
        <Image
          style={styles.container}
          source={require("../images/splash.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    alignItems: 'center',
    position: 'relative',
  }
});

export default Splash; //Provides export access for the component
