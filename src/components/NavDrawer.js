import React, { Component } from "react";
import { AppRegistry, DrawerLayoutAndroid, Text } from "react-native";
// import { MainView } from "react-native-drawer";
import {
  Image,
  View,
  StyleSheet,
  StatusBar,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import Drawer from "react-native-drawer";
import ControlPanel from "./ControlPanel";
import Hamburger from "./Hamburger";
import { Actions } from "react-native-router-flux";
import TabBarComponent from "./TabBar";

class NavDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridType: true
    };
  }
  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };

  closeDrawer = () => {
    // this._drawer._root.close()
    this.setState({
      drawerVisible: !this.state.drawerVisible,
      active: !this.state.active
    });
  };

  updateState = () => {
    // Alert.alert(
    //   "drawerVisible " +
    //     this.state.drawerVisible +
    //     "\nActive " +
    //     this.state.active
    // );

    this.setState({
      drawerVisible: !this.state.drawerVisible,
      active: !this.state.active
    });
  };

  updateList = () => {
    this.setState({
      gridType: !this.state.gridType
    });
  };

  SecondClassFunction = () => {
    this.closeControlPanel();
  };

  state = {
    drawerVisible: false,
    active: false
  };

  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <View>
          <StatusBar backgroundColor="#141414" barStyle="light-content" />
        </View>

        <View
          style={{
            backgroundColor: "#141414",
            height: 48,
            paddingLeft: 5,
            paddingTop: 5,
            flexDirection: "row"
          }}
        >
          <Hamburger
            ref={component => (this.touchable = component)}
            active={this.state.active}
            type="arrow"
            color="#fff"
            onPress={() => this.updateState()}
          />
          <Text
            style={{
              alignSelf: "center",
              textAlign: "center",
              color: "white",
              flex: 0.8,
              justifyContent: "center",
              fontSize: 20,
              paddingBottom: 10,
              alignItems: "center"
            }}
          >
            Cinematics
          </Text>

          <TouchableOpacity onPress={this.updateList}>
            <View>
              <Image
                source={
                  this.state.gridType
                    ? require("../images/ic_grid_off_24dp.png")
                    : require("../images/ic_grid_on_24dp.png")
                }
                style={{
                  height: 24,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 8,
                  tintColor: "#fff",
                  width: 24,
                  borderRadius: 0
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Actions.TabView()}>
            <View>
              <Image
                source={require("../images/ic_search_24dp.png")}
                style={{
                  height: 24,
                  marginLeft: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 8,
                  tintColor: "#fff",
                  width: 24,
                  borderRadius: 0
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* <Button onPress={this.updateState} title="Open" color="#841584" /> */}
        <Drawer
          ref={ref => (this._drawer = ref)}
          type="overlay"
          tapToClose={true}
          openDrawerOffset={0.35}
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          styles={drawerStyles}
          content={<ControlPanel />}
          open={this.state.drawerVisible}
          tweenHandler={ratio => ({
            main: { opacity: (2 - ratio) / 2 }
          })}
        />

        {!this.state.drawerVisible && 
        <View  accessible={true}
          style={{
            width: "100%",
            height: "100%"
          }}
        >
          <TabBarComponent />
        </View>
        }
      </View>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: "white", shadowOpacity: 0.8, shadowRadius: 3 },
  main: { paddingLeft: 3 }
};
export default NavDrawer;
