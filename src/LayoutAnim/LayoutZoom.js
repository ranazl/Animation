import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  TouchableHighlight
} from "react-native";

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class LayoutZoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  configfile = {
    duration: 1000,
    create: {
      type: "easeIn",
      springDamping: 0.5,
      property: "opacity",
      duration: 1000
    },
    update: {
      type: "easeOut",
    //   springDamping: 0.5,
      property: "scaleY",
      duration: 1000
    },
    delete: {
      type: "spring",
      springDamping: 0.2,
      property: "scaleY",
      duration: 3000
    }
  };

  changeButton = () => {
    LayoutAnimation.configureNext(this.configfile);
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <View style={styles.container}>

      { this.state.toggle && <View>
          <View style={{width:250,height:250,backgroundColor:'white',borderRadius:5}}>
          <Text>Salam</Text>
          </View></View>}
        <TouchableHighlight
          onPress={this.changeButton}
          underlayColor="rgba(100,100,100,0.5)"
          style={this.state.toggle ? styles.buttonOn : styles.buttonOff}
        >
          {this.state.toggle ? (
            <Text style={{ letterSpacing: 10 }}> MENU </Text>
          ) : (
            <Text>&#9776;</Text>
          )}
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
    backgroundColor: "royalblue",
    justifyContent:'flex-end',
    alignItems: "center"
  },
  buttonOn: {
    width: 300,
    height: 60,
    backgroundColor: "white",
    elevation: 10,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonOff: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    elevation: 10,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  }
});
