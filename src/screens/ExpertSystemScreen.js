import React, { PureComponent} from 'react';
import {
    View, Text, StyleSheet, Button, StatusBar
} from 'react-native'

import { setHomeRoot } from '../navigation/navigations'

class ExpertSystemScreen extends PureComponent { 
    
    componentDidMount () {

    }
    
    render() {
        return(
          <View style={styles.container}>
            <Text style={styles.welcome}>Expert System List Here</Text>
          </View>
        )
    }
}

export default ExpertSystemScreen

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