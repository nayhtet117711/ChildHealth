import React, { PureComponent} from 'react';
import {
    View, Text, StyleSheet, Button, StatusBar
} from 'react-native'

import { setHomeRoot } from '../navigation/navigations'

class StartScreen extends PureComponent { 
    
    componentDidMount () {
      setTimeout(()=>{
        setHomeRoot();
      }, 300)
    }
    render() {
        return(
          <View style={styles.container}>
            <Text style={styles.welcome}>Loading...</Text>
          </View>
        )
    }
}

export default StartScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
});