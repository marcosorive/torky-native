import React from 'react';
import {StyleSheet} from 'react-native';
import {Platform} from '../common/models/Platform';
import {Button} from 'react-native-elements'
type StoreButtonProps = {
    title: Platform,
    onPress: Function,
};

export function StoreButton(props:StoreButtonProps){
    return(
        <Button buttonStyle={styles.overlayStoreButton} title={props.title.toString()} onPress={() => {props.onPress(props.title)}}/>
    )
}

const styles = StyleSheet.create({
    overlayStoreButton:{
        marginBottom: 10,
        backgroundColor:"#0056b3",
    },
})
