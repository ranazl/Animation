import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Animated
} from "react-native";
import girls from "./girl/girls.js";
let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollX: new Animated.Value(0),
    };
  }

  render() {
    let scrollIndicator = girls;
    let position = Animated.divide(this.state.scrollX, deviceWidth);
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <FlatList
            pagingEnabled
            data={girls}
            horizontal={true}
            onScroll={Animated.event([{nativeEvent: {contentOffset: {x: this.state.scrollX}}}])}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={{ width: deviceWidth }}>
                <View>
                  <Image source={item.image} style={{ position: "absolute" }} />
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 400,
                    paddingTop: 50,
                    paddingLeft: 30,
                    paddingRight: 30,
                    justifyContent: "space-between"
                  }}
                >
                  <Text style={styles.pm}>{item.title}</Text>
                  <Text style={styles.pm}>{item.title1}</Text>
                  <Text style={styles.pm}>{item.title2}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 300,
                    paddingTop: 50,
                    paddingLeft: 30,
                    paddingRight: 30,
                    justifyContent: "space-between"
                  }}
                >
                  <Text style={styles.pm2}>{item.title3}</Text>
                  <Text style={styles.pm2}>{item.title4}</Text>
                  <Text style={styles.pm2}>{item.title5}</Text>
                </View>
              </View>
            )}
          />
        </View>

        <View style={{ flex: 1 }}>
          <View style={styles.footer}>
              <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:20,paddingLeft:30,paddingRight:30}}>
             {
               girls.map((item , i)=> {
               var opacity = position.interpolate({
                inputRange: [i - .8, i, i + .8],
                outputRange: [0.15, 1, 0.15],
                extrapolate: 'extend',
            });
            return (
              <Animated.View key={i} style={{
                opacity,
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 50,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                margin: 8,
                position:'absolute',

            }}>
                
                <Animated.Text style={{
                    opacity: this.state.fadeIn,
                    color: '#000',
                    fontWeight: 'bold',
                    fontFamily: 'monospace',
                    position:'absolute',

                }}>{scrollIndicator[i].title6} {scrollIndicator[i].title7}
                </Animated.Text>
            
            
            </Animated.View>
        )
        
    })}
                {/* <FlatList
                            data={girls}
                            horizontal={true}
                            keyExtractor={item => item.title}
                            renderItem={({ item }) => (
                            <View style={{width:deviceWidth}}> 
                              <Text style={{fontWeight:'bold'}}>{item.title6}</Text>
                              <Text>{item.title7}</Text>
                              </View>
                            )}
                /> */}

                <View style={styles.follow}>
                    <Text style={{color:'red',fontSize:20,fontWeight:'bold'}}>Follow</Text>
                </View>
              </View>
            <View style={styles.icon}>
            <View style={styles.icons}>
              <Image source={require("./picture/article.png")} />
              <Image source={require("./picture/search.png")} />
              <Image source={require("./picture/plus.png")} style={{width:40,height:40,}} />
              <Image source={require("./picture/alarm.png")} />
              <Image source={require("./picture/chat.png")} />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  main: {
    height: 700,
    position: "absolute"
  },
  footer: {
    height: 300,
    backgroundColor: "#e6eaea",
    marginTop: 500,
    borderRadius: 45,
    // flexDirection:'row',
    // justifyContent:'space-between'
  },
  icon: {
    height: 180,
    backgroundColor: "white",
    marginTop: 15,
    borderRadius: 50
    // justifyContent: 'flex-start',
  },
  icons: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop:40
  },
  follow: {
    width:120,
    height:40,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius:30,
    alignItems: 'center',
    justifyContent:'center',
  },
  pm: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  },
  pm2: {
    color: "white",

    fontSize: 18
  }
});
