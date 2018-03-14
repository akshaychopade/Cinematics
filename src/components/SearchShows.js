import React, { Component } from "react";

import {
  Text,
  StyleSheet,
  View,
  ListView,
  RefreshControl,
  TextInput,
  ActivityIndicator,
  Alert,
  Image,
  TouchableNativeFeedback
} from "react-native";
import ImageLoad from "./ImageLoad";

export default class SearchShows extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      text: "",
      refreshing: true
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    // return fetch("https://reactnativecode.000webhostapp.com/FruitsList.php")
    this.searchMovies();
  }

  searchMovies() {
    try {
      return fetch(
        "https://api.themoviedb.org/3/search/collection?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US&query=" +
          this.state.text +
          "&page=1"
      )
        .then(response => response.json())
        .then(responseJson => {
          // alert(JSON.stringify(responseJson.results));
          // alert(JSON.stringify(responseJson));

          if (responseJson.results) {
            let ds = new ListView.DataSource({
              rowHasChanged: (r1, r2) => r1 !== r2
            });
            this.setState(
              {
                isLoading: false,
                refreshing: false,
                dataSource: ds.cloneWithRows(responseJson.results)
              },
              function() {
                // In this block you can do something with new state.
                this.arrayholder = responseJson.results;
              }
            );
          } else {
            this.setState({
              isLoading: false,
              refreshing: false
            });
          }
        })
        .catch(error => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }

  GetListViewItem(fruit_name) {
    Alert.alert(fruit_name);
  }

  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function(item) {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    if (this.state.dataSource) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newData)
        // text: text
      });
    }
    this.setState({
      text: text
    });
    this.searchMovies();
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.4,
          width: "100%",
          backgroundColor: "gray"
        }}
      />
    );
  };

  _onRefresh() {
    this.setState({ refreshing: true });
    this.searchMovies();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.MainContainer}>
        <TextInput
          style={styles.TextInputStyleClass}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        {this.state.dataSource && (
          <ListView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
            }
            dataSource={this.state.dataSource}
            renderSeparator={this.ListViewItemSeparator}
            renderRow={rowData => (
              <View>
                <TouchableNativeFeedback>
                  <View style={styles.menucontainer}>
                    <ImageLoad
                      style={styles.photo}
                      loadingStyle={{ size: "large", color: "gray" }}
                      source={{
                        uri:
                          "http://image.tmdb.org/t/p/w185/" +
                          rowData.poster_path
                      }}
                    />

                    <Text
                      style={styles.rowViewContainer}
                      onPress={this.GetListViewItem.bind(this, rowData.name)}
                    >
                      {rowData.name}
                    </Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            )}
            enableEmptySections={true}
            style={{ marginTop: 10 }}
          />
        )}
        {this.state.dataSource == null && (
          <View style={styles.MainContainer}>
            <Text
              style={{
                textAlign: "center"
              }}
            >
              No Results found
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 7
  },

  rowViewContainer: {
    fontSize: 17,
    padding: 10
  },

  TextInputStyleClass: {
    textAlign: "center",
    height: 40,
    borderWidth: 1,
    borderColor: "#009688",
    borderRadius: 7,
    backgroundColor: "#FFFFFF"
  },
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE"
  },
  photo: {
    height: 120,
    alignItems: "center",
    width: 100,
    borderRadius: 0
  },
  menucontainer: {
    flex: 1,
    padding: 12,
    flexDirection: "row",
    alignItems: "center"
  }
});
