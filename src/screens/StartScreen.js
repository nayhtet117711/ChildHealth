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
            <StatusBar
                // backgroundColor = "#f5fCFF"
                // animated={true}
                hidden={true}
            />
            <Text style={styles.welcome}>Loading...</Text>
            {/* <Button title="My Account" onPress={} /> */}
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
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
});