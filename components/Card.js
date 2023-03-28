import React from "react";
import { Alert,
    Button,
    Dimensions,
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View, } from "react-native";

    const deviceWidth = Math.round(Dimensions.get('window').width) 
    

    const Card = (props)=> {
        const {info} = props;
        const {name, categories, deliveryTime, distance, image } = info;
        return(
            <View style = {styles.cardView}>

            <Image style={styles.imageView} source={image}></Image>
            <Text>{name}</Text>
            <Text>{categories}</Text>

            </View>
        );
    }
    const styles = StyleSheet.create({
        cardView:{
            alignItems:"center",
            marginTop:10,
            backgroundColor: '#a29bfe',
            borderRadius: 20,
            width: deviceWidth - 40,
            height:200,
        },
        imageView:{
            height:150,
            width: deviceWidth - 40,
            borderTopLeftRadius:20,
            borderTopRightRadius:20
            }
    })


    export default Card;