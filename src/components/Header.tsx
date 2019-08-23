import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Header(){
    return(<Text style={styles.h1}>Torky</Text>)
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 50,
        fontWeight:"200",
        fontFamily: "Roboto",
        color: "#0056b3",
    },
});
  