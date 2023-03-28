import React from "react";
import { Text, View, Dimension, StyleSheet } from "react-native";
import {colors, parameters} from "../global/styles"
import {Icon} from "react-native-elements"


const Header = ({title})=> {

    return(
    <View style={styles.header}>
    <View style ={{marginLeft:20}}>
    <Icon 
        type = "material-community"
        name = "arrow-left"
        color = {colors.headertext}
        size = {28}
        onPress = { ()=>{} }

    /></View>
        <Text style = {styles.headertext}>{title}</Text>
    
    </View>
    )
} ;


const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        backgroundColor: colors.buttons,
        height: parameters.headerHeight
    },
    headertext:{
        marginLeft: 30,
        color: colors.headertext,
        fontWeight:"bold",
        fontSize:22,
    }
})








export default Header;