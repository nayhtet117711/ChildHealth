import React, { PureComponent} from 'react';
import { Navigation } from "react-native-navigation";
import {
    View, Text, StyleSheet, Button, StatusBar
} from 'react-native'
import { navigateScreen3ToSetting1 } from "../navigation/navigations"

const SideMenu = (props) => { 
  return(
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#233445fe", paddingTop: 20, paddingBottom: 40 }}>
        <Text style={styles.side}>{props.text} Menu</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "#ccdde5f5" }}>

      </View>
    </View>
  )
}

const Screen1 = (props) => {   
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>New Feeds....</Text>
      </View>
    )
}

const Screen2 = (props) => {   
  return(
    <View style={styles.container}>
      <Text style={styles.welcome}>Messages...</Text>
    </View>
  )
}

const Screen3 = (props) => {   
  console.log({ props })
  return(
    <View style={styles.container}>
      <Text style={styles.welcome}>Settings...</Text>
      <Button 
        title="Setting 1" 
        onPress={()=>navigateScreen3ToSetting1({componentId : props.componentId})}  />
    </View>
  )
}

const Setting1 = (props) => {   
  return(
    <View style={styles.container}>
      <Text style={styles.welcome}>Setting One</Text>
    </View>
  )
}

export {
  SideMenu,
  Screen1,
  Screen2,
  Screen3,
  Setting1,
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: "#00000042"
    },
    side: {
      fontSize: 16,
      textAlign: 'left',
      margin: 10,
      color: "#e5e5ff"
    },
});