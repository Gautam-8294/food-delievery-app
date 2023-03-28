import React from "react";
import { Alert,
    Button,
    Dimensions,
    FlatList,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View, } from "react-native";
import Card from "./Card";
import {colors, parameters} from "../global/styles";




const restaurants = [
    {
      name: 'The Muffin Man Bakery',
      categories: 'Desserts, Cakes and Bakery',
      deliveryTime: '35 min',
      distance: '3.7 km',
      image: require('../assets/the-muffin-man-bakery.jpg'),
      id: 1,
    },
    {
      name: 'Central Perk Coffee House',
      categories: 'Beverages, Desserts, Cakes and Bakery',
      deliveryTime: '45 min',
      distance: '4.3 km',
      image: require('../assets/central-perk.jpg'),
      id: 2,
    },
    {
      name: 'WildBread Bakery',
      categories: 'Cakes and Bakery, American, Sandwiches, Burgers',
      deliveryTime: '25 min',
      distance: '3 km',
      image: require('../assets/wildbread-bakery.jpg'),
      id: 3,
    },
    {
      name: "McDonald's",
      categories: 'Fast Food, Burgers, Desserts',
      deliveryTime: '20 min',
      distance: '2.5 km',
      image: require('../assets/mcdo.jpg'),
      id: 4,
    },
    {
      name: 'Jollibee',
      categories: 'Fast Food, Burgers, Desserts',
      deliveryTime: '25 min',
      distance: '3.1 km',
      image: require('../assets/jollibee.jpg'),
      id: 5,
    },
  ];







 
const deviceHeight = Math.round(Dimensions.get('window').height)

    const HomeScreen = (info)=> {
        return(
            <View style = {styles.homeView}>
                {/* <Card path={require('../assets/img1.png')}/>
                <Card path={require('../assets/img2.png')}/>
                <Card path={require('../assets/img3.png')}/> */}
                

                <FlatList 
                    renderItem={({item})=>{
                        return<Card info={item}></Card>
                    }}
                    data={restaurants}
                    keyExtractor ={(restaurant)=>restaurant.id.toString()}
                />

            </View>
        );
    }
    const styles = StyleSheet.create({
        homeView:{
            alignItems: "center",
            backgroundColor: '#6c5ce7',
            height:deviceHeight,
        },
        header:{
            flexDirection:"row",
            backgroundColor:colors.header
        }
    })


    export default HomeScreen;