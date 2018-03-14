import * as React from "react";
import { View, StyleSheet, Dimensions, StatusBar } from "react-native";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";
import SearchShows from "./SearchShows";

const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};

const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: "#FAFAFA" }]} />
);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: "#FAFAFA" }]} />
);
const ThirdRoute = () => (
  <View style={[styles.container, { backgroundColor: "#FAFAFA" }]} />
);

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "MOVIES" },
      { key: "second", title: "ACTORS" },
      { key: "second", title: "TV SHOWS" }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
  });

  render() {
    return (
      <View style={styles.container}>
        <View>
          <StatusBar backgroundColor="#141414" barStyle="light-content" />
        </View>
        <View style={{ backgroundColor: "black", height: 60, marginTop: 0 }}>
          <TabViewAnimated
            animationEnabled={true}
            navigationState={this.state}
            renderScene={this._renderScene}
            renderHeader={this._renderHeader}
            onIndexChange={this._handleIndexChange}
            initialLayout={initialLayout}
          />
        </View>
        <SearchShows />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  }
});
