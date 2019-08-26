import React from 'react';
import {StyleSheet, Text} from 'react-native';
export function P(props){
    return(
        <Text style={styles.p}>
            {props.children}
        </Text>        
    );
}
const styles = StyleSheet.create({
    p:{
        fontSize:16,
        textAlign:"justify",
        marginBottom:10
    },
    q:{
        fontSize:16,
        fontWeight: "bold",
        textAlign:"justify",
        marginBottom:10
    }
})