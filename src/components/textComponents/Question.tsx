import React from 'react';
import {StyleSheet, Text} from 'react-native';
export function Q(props){
    return(
        <Text style={styles.q}>
            {props.children}
        </Text>        
    );
}
const styles = StyleSheet.create({
    q:{
        fontSize:16,
        fontWeight: "bold",
        textAlign:"justify",
        marginBottom:10
    }
})