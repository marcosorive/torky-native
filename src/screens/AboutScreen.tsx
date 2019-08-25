import React from 'react';
import {View, StatusBar} from 'react-native';
import {Text} from 'react-native-elements';
import {NavigationParams,NavigationScreenProp, NavigationState,} from 'react-navigation';
type AboutScreenProps={
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
export class AboutScreen extends React.Component<AboutScreenProps>{
    constructor(props: AboutScreenProps){
        super(props)
    }
    render(){
        return(
            <View>
                <StatusBar backgroundColor="#efefef"/>
                <Text h1> This is about</Text>
            </View>
        )
    }
}