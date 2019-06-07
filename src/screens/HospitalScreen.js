import React, { PureComponent} from 'react';
import {
    View, StyleSheet, Button, StatusBar, FlatList, Image, RefreshControl
} from 'react-native'
import { Navigation } from "react-native-navigation"
import { setHomeRoot } from '../navigation/navigations'
import { Card, CardItem, Left, Body, Right, Thumbnail, Text, } from 'native-base'

class HospitalScreen extends PureComponent { 

    constructor() {
      super()
      this.state = {
        refreshing: false
      }
    }

    onRefresh = () => {
      this.setState({ refreshing: true }, () =>{
        setTimeout(()=>{
          this.setState({ refreshing: false })
        }, 1000)
      })
    }
    
    _renderListItem = ({ item }) => {
      return (
        <Card style={{ }}>
          <CardItem>
            <Left>
              <Thumbnail source={item.imageSources} />
              <Body>
                <Text titleFontSize>{item.name}</Text>
                <Text note>{item.street}, {item.city}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={item.imageSources} style={styles.imagee}/>
          </CardItem>
        </Card>
      )
    }

    render() {
      const { refreshing } = this.state
      return(
        <View style={styles.container}>
          <FlatList 
            contentContainerStyle={styles.flatListContainer}
            initialNumToRender={2}
            ListEmptyComponent={()=> (
              <View style={{ flex: 1, }}>
                <Text style={styles.welcome}>Empty</Text>
              </View>
            )}
            data={hospitalList}
            renderItem={this._renderListItem}
            keyExtractor={item => item.name+item.id}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={this.onRefresh}
                progressViewOffset={60}
                // colors={["#2c3e50", "#8e44ad", #c0392b "##16a085", "#2980b9"]}
                tintColor={"#2980b9"}
                progressBackgroundColor={"#ffffff"}
              />
            }
            //stickyHeaderIndices={this.state.stickyHeaderIndices}
          />
        </View>
      )
    }
}

export default HospitalScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    welcome: {
      color: "#B5B5B5",
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    imagee: {
        height: 160, 
        width: null, flex: 1
    },
    flatListContainer: { 
      paddingHorizontal: 4, 
      paddingTop: 56, 
      paddingBottom: 56,  
    },

});

const hospitalList = [
  {
    id: 1,
    name: "City Hospital",
    city: "Mandalay",
    street: "32 x 88 corner",
    imageSources : require("../assets/images/hospital_image.jpg"),
    isStar: true,
    phoneNumber: "0944333221",
    website: "www.mdycityhospital.com",
  },
  {
    id: 2,
    name: "Hospital 22",
    city: "Mandalay",
    street: "40 x 69",
    imageSources : require("../assets/images/hospital_image_2.jpg"),
    isStar: false,
    phoneNumber: "0967383221",
    website: "www.hospital-two.com",
  },
  {
    id: 3,
    name: "Hospital 33",
    city: "Mandalay",
    street: "26 x 68",
    imageSources : require("../assets/images/hospital_image_1.jpg"),
    isStar: false,
    phoneNumber: "0990383271",
    website: "www.hospital5.com",
  },
  {
    id: 4,
    name: "Hospital 4",
    city: "Mandalay",
    street: "40 x 69",
    imageSources : require("../assets/images/hospital_image_3.jpg"),
    isStar: false,
    phoneNumber: "0967383221",
    website: "www.hospital-two.com",
  },
  {
    id: 5,
    name: "Hospital 5",
    city: "Mandalay",
    street: "26 x 68",
    imageSources : require("../assets/images/hospital_image_1.jpg"),
    isStar: false,
    phoneNumber: "0990383271",
    website: "www.hospital5.com",
  },
  {
    id: 6,
    name: "Hospital 6",
    city: "Mandalay",
    street: "26 x 68",
    imageSources : require("../assets/images/hospital_image_2.jpg"),
    isStar: false,
    phoneNumber: "0990383271",
    website: "www.hospital5.com",
  },
  {
    id: 7,
    name: "Hospital 7",
    city: "Mandalay",
    street: "40 x 69",
    imageSources : require("../assets/images/hospital_image.jpg"),
    isStar: false,
    phoneNumber: "0967383221",
    website: "www.hospital-two.com",
  },
  {
    id: 8,
    name: "Hospital 8",
    city: "Mandalay",
    street: "26 x 68",
    imageSources : require("../assets/images/hospital_image_1.jpg"),
    isStar: false,
    phoneNumber: "0990383271",
    website: "www.hospital5.com",
  },
  {
    id: 9,
    name: "Hospital 9",
    city: "Mandalay",
    street: "26 x 68",
    imageSources : require("../assets/images/hospital_image_2.jpg"),
    isStar: false,
    phoneNumber: "0990383271",
    website: "www.hospital5.com",
  },
  {
    id: 11,
    name: "City Hospital",
    city: "Mandalay",
    street: "32 x 88 corner",
    imageSources : require("../assets/images/hospital_image.jpg"),
    isStar: true,
    phoneNumber: "0944333221",
    website: "www.mdycityhospital.com",
  },
  {
    id: 22,
    name: "Hospital 22",
    city: "Mandalay",
    street: "40 x 69",
    imageSources : require("../assets/images/hospital_image_2.jpg"),
    isStar: false,
    phoneNumber: "0967383221",
    website: "www.hospital-two.com",
  },
  {
    id: 33,
    name: "Hospital 33",
    city: "Mandalay",
    street: "26 x 68",
    imageSources : require("../assets/images/hospital_image_1.jpg"),
    isStar: false,
    phoneNumber: "0990383271",
    website: "www.hospital5.com",
  },
  {
    id: 44,
    name: "Hospital 4",
    city: "Mandalay",
    street: "40 x 69",
    imageSources : require("../assets/images/hospital_image_3.jpg"),
    isStar: false,
    phoneNumber: "0967383221",
    website: "www.hospital-two.com",
  },
  {
    id: 55,
    name: "Hospital 5",
    city: "Mandalay",
    street: "26 x 68",
    imageSources : require("../assets/images/hospital_image_1.jpg"),
    isStar: false,
    phoneNumber: "0990383271",
    website: "www.hospital5.com",
  },
  {
    id: 66,
    name: "Hospital 6",
    city: "Mandalay",
    street: "26 x 68",
    imageSources : require("../assets/images/hospital_image_2.jpg"),
    isStar: false,
    phoneNumber: "0990383271",
    website: "www.hospital5.com",
  },
  {
    id: 77,
    name: "Hospital 7",
    city: "Mandalay",
    street: "40 x 69",
    imageSources : require("../assets/images/hospital_image.jpg"),
    isStar: false,
    phoneNumber: "0967383221",
    website: "www.hospital-two.com",
  },
  {
    id: 88,
    name: "Hospital 8",
    city: "Mandalay",
    street: "26 x 68",
    imageSources : require("../assets/images/hospital_image_1.jpg"),
    isStar: false,
    phoneNumber: "0990383271",
    website: "www.hospital5.com",
  },
  {
    id: 99,
    name: "Hospital 9",
    city: "Mandalay",
    street: "26 x 68",
    imageSources : require("../assets/images/hospital_image_2.jpg"),
    isStar: false,
    phoneNumber: "0990383271",
    website: "www.hospital5.com",
  },
]