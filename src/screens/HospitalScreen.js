import React, { PureComponent} from 'react';
import {
    View, Text, StyleSheet, Button, StatusBar
} from 'react-native'
import { Navigation } from "react-native-navigation"
import { setHomeRoot } from '../navigation/navigations'

class HospitalScreen extends PureComponent { 

    componentDidMount () {
    }
    
    render() {
        return(
          <View style={styles.container}>
            <Text style={styles.welcome}>Hospital List Here</Text>
          </View>
        )
    }
}

export default HospitalScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
});