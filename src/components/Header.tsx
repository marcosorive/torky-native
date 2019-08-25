import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export function Header(){
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.h1}>Torky</Text>
            <Text style={styles.h2}>Encuentra el mejor precio para comprar videojuegos en España</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer : {
        flex:3,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    h1: {
        fontSize: 50,
        fontWeight:"500",
        fontFamily: "Roboto",
        color: "#0056b3",
    },
    h2: {
        fontWeight:"500",
        textAlign: "center",
        marginLeft: 10,
        marginRight:10
    }
});
  