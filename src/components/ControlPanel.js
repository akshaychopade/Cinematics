import {
  PropTypes,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Alert,
  Image
} from "react-native";
import React, { Component } from "react";
import NavDrawer from "./NavDrawer";

export default class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridType: true
    };
    Obj = new NavDrawer();
  }
  static propTypes = {
    // closeDrawer: PropTypes.func.isRequired
  };

  beginTransition = () => {
    Obj.updateState();
  };

  render() {
    let { closeDrawer } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View style={{ backgroundColor: "#333333", height: 170, flex: 1 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              marginLeft: 15,
              marginTop: 40,
              alignSelf: "flex-start"
            }}
          >
            <Image
              source={{
                uri:
                  "http://webiconspng.com/wp-content/uploads/2016/11/avatar_male_man_mature_old_person_user_icon_628284.png"
              }}
              style={{
                height: 70,
                alignItems: "center",
                width: 70,
                borderRadius: 20
              }}
            />
            <Text
              style={{
                fontSize: 14,
                color: "white",
                textAlign: "center",
                paddingBottom: 10,
                fontWeight: "bold",
                marginTop: 6,
                alignSelf: "flex-start"
              }}
            >
              themovieguide
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              color: "white",
              textAlign: "center",
              paddingBottom: 10,
              marginLeft: 15,
              marginTop: 4,
              alignSelf: "flex-start"
            }}
          >
            Cinematics: The Movie Guide
          </Text>
        </View>

        <TouchableNativeFeedback onPress={this.beginTransition}>
          <View style={styles.menucontainer}>
            <Image
              source={require("../images/ic_movie_creation_24dp.png")}
              style={styles.photo}
            />
            <Text style={styles.text}>Movies</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={this.beginTransition}>
        <View style={styles.menucontainer}>
          <Image
            source={require("../images/ic_live_tv_24dp.png")}
            style={styles.photo}
          />
          <Text style={styles.text}>TV Shows</Text>
        </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={this.beginTransition}>
        <View style={styles.menucontainer}>
          <Image
            source={require("../images/ic_search_24dp.png")}
            style={styles.photo}
          />
          <Text style={styles.text}>Discover</Text>
        </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={this.beginTransition}>
        <View style={styles.menucontainer}>
          <Image
            source={require("../images/ic_person__dark_24dp.png")}
            style={styles.photo}
          />
          <Text style={styles.text}>Popular People</Text>
        </View>
        </TouchableNativeFeedback>


        <View style={styles.lineStyle} />

        <TouchableNativeFeedback onPress={this.beginTransition}>
        <View style={styles.menucontainer}>
          <Image
            source={require("../images/design_ic_visibility.png")}
            style={styles.photo}
          />
          <Text style={styles.text}>Watchlist</Text>
        </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={this.beginTransition}>
        <View style={styles.menucontainer}>
          <Image
            source={require("../images/ic_favorite_24dp.png")}
            style={styles.photo}
          />
          <Text style={styles.text}>Favorites</Text>
        </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={this.beginTransition}>
        <View style={styles.menucontainer}>
          <Image
            source={require("../images/abc_ic_star_black_16dp.png")}
            style={styles.photo}
          />
          <Text style={styles.text}>Rated</Text>
        </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={this.beginTransition}>
        <View style={styles.menucontainer}>
          <Image
            source={require("../images/ic_library_books_24dp.png")}
            style={styles.photo}
          />
          <Text style={styles.text}>Recommendations</Text>
        </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={this.beginTransition}>
        <View style={styles.menucontainer}>
          <Image source={require("../images/ic_alarm_24dp.png")} style={styles.photo} />
          <Text style={styles.text}>Reminders</Text>
        </View>
        </TouchableNativeFeedback>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE"
  },
  controlText: {
    color: "gray",
    padding: 10
  },
  button: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    padding: 10
  },
  menucontainer: {
    flex: 1,
    padding: 12,
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    marginLeft: 15,
    fontSize: 14
  },
  photo: {
    height: 20,
    alignItems: "center",
    tintColor: "#888888",
    width: 20,
    borderRadius: 0
  },
  lineStyle: {
    borderWidth: 0.2,
    borderColor: "#888888",
    paddingBottom: 5
  }
});