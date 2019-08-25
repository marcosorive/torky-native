import React from 'react';
import {View, StatusBar} from 'react-native';
import {Text} from 'react-native-elements';
import {NavigationParams,NavigationScreenProp, NavigationState,} from 'react-navigation';
import {ConcreteSearchResultsBuilder} from '../components/ConcreteSearchResultsBuilder';

type ResultsScreenProps={
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
 }

export class ResultsScreen extends React.Component<ResultsScreenProps>{
    constructor(props: ResultsScreenProps){
        super(props)
    }
    render(){
        let {query, platform} = this.props.navigation.state.params;
        return(
            <View style={{flex:1}}>
                <StatusBar backgroundColor="blue"/>
                <Text style={{flex:1}}> This is results for {query} in {platform}</Text>
                <ConcreteSearchResultsBuilder style={{flex:2}} query={query} platform={platform}/>
            </View>
        )
    }
}