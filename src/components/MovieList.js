import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Platform,
  TouchableOpacity
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchMovieData from "../actions/MovieAction";
import logoImg from "../images/ic_tmdb.png";
import { IMAGE_BASE_URL } from "../utils/constants";

const { width, height } = Dimensions.get("window");

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesList: [],
      GridColumnsValue: true,
      ButtonDefaultText: "CHANGE TO GRIDVIEW"
    };
  }

  componentWillMount() {
    this.props.fetchMovieData();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.MovieListData.MovieListData.length > 0) {
      this.setState({ moviesList: nextProps.MovieListData.MovieListData }); // this will update state to re-render ui
    } else {
      //alert("List is empty");
    }
  }

  ChangeGridValueFunction = () => {
    alert("ChangeGridValueFunction");
    if (this.state.GridColumnsValue === true) {
      this.setState({
        GridColumnsValue: false,
        ButtonDefaultText: "CHANGE TO LISTVIEW"
      });
    } else {
      this.setState({
        GridColumnsValue: true,
        ButtonDefaultText: "CHANGE TO GRIDVIEW"
      });
    }
  };

  _keyExtractor = (item, index) => item.id;

  renderRowItem = itemData => {
    return (
      <View style={{ flex: 1, flexDirection: "column", margin: 1, padding: 5 }}>
        <Image
          style={styles.ImageComponentStyle}
          source={{ uri: IMAGE_BASE_URL + itemData.item.poster_path }}
        />
        <Text style={styles.ItemTextStyle} numberOfLines={1}>
          {itemData.item.title}
        </Text>
      </View>
    );
  };

  renderRowItemList = itemData => {
    return (
      <View style={styles.rowList}>
        <Image
          style={styles.ListImageComponentStyle}
          source={{ uri: IMAGE_BASE_URL + itemData.item.poster_path }}
        />
        <View style={styles.rowListView}>
          <Text style={styles.yearTextStyle}>
            {" "}
            {itemData.item.release_date.substring(
              0,
              itemData.item.release_date.indexOf("-")
            )}{" "}
          </Text>
          <Text style={{ color: "black" }}> {itemData.item.title} </Text>
          <Text style={styles.textDescrption}> {itemData.item.title} </Text>
          <View style={styles.bottomView}>
            <Image style={styles.image} source={logoImg} />
            <Text style={styles.yearTextStyle}>
              {" "}
              {itemData.item.vote_average}{" "}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.moviesList}
          renderItem={
            this.state.GridColumnsValue
              ? this.renderRowItemList
              : this.renderRowItem
          }
          numColumns={this.state.GridColumnsValue ? 1 : 3}
          key={this.state.GridColumnsValue ? "ONE COLUMN" : "THREE COLUMN"}
          keyExtractor={this._keyExtractor}
        />

        <TouchableOpacity
          style={styles.ButtonStyle}
          activeOpacity={0.5}
          onPress={this.ChangeGridValueFunction}
        >
          <Text style={styles.ButtonInsideTextStyle}>
            {" "}
            {this.state.ButtonDefaultText}{" "}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 5,
    paddingTop: Platform.OS === "ios" ? 20 : 0
  },
  ImageComponentStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    backgroundColor: "#4CAF50"
  },
  ItemTextStyle: {
    color: "#000000",
    padding: 10,
    fontSize: 12,
    textAlign: "left",
    backgroundColor: "#d0d3d4",
    marginBottom: 5
  },
  ButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#FF9800",
    width: "100%",
    height: 50
  },
  ButtonInsideTextStyle: {
    color: "#fff",
    textAlign: "center"
  },
  rowList: {
    flex: 1,
    flexDirection: "row",
    margin: 1,
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "gray"
  },
  ListImageComponentStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    flex: 0.2,
    backgroundColor: "#4CAF50"
  },
  rowListView: {
    flex: 0.8,
    flexDirection: "column",
    margin: 1,
    padding: 5
  },
  yearTextStyle: {
    color: "gray",
    fontSize: 11
  },
  textDescrption: {
    color: "gray",
    fontSize: 13,
    marginTop: 5
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "cover"
  },
  bottomView: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center"
  }
});

function mapStateToProps(state) {
  return {
    MovieListData: state.MovieListData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovieData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
