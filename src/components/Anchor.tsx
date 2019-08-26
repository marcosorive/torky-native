import React from'react';
import {StyleSheet} from 'react-native'
import {Linking} from 'expo';
import {Button} from 'react-native-elements';

type AnchorProps = {
    url:string
}

export class Anchor extends React.Component<AnchorProps>{

    constructor(props:AnchorProps){
        super(props);

        this.openLink = this.openLink.bind(this);
    }

    openLink(url){
        Linking.openURL(url);
    }


    render(){
        return(
            <Button onPress={() => this.openLink(this.props.url)} buttonStyle={styles.anchor} title="Comprar"/>
        )
    }
}

const styles = StyleSheet.create({
    anchor:{
        backgroundColor: "#0056b3",

    }
})