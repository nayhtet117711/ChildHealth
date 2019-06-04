import React, { PureComponent} from 'react';
import {
    View, Text, StyleSheet, Button, StatusBar
} from 'react-native'

class HeaderOne extends PureComponent { 
    
    componentDidMount () {
     
    }
    render() {
        return(
          <View style={styles.container}>
            <Text style={styles.welcome}>Loading...</Text>
          </View>
        )
    }
}

export default HeaderOne

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