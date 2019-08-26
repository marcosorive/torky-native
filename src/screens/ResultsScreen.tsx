import React from 'react';
import {View, StatusBar, Text} from 'react-native';
import {NavigationParams,NavigationScreenProp, NavigationState,} from 'react-navigation';
import {ConcreteSearchResultsBuilder} from '../components/ConcreteSearchResultsBuilder';

type ResultsScreenProps={
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
 }

export class ResultsScreen extends React.Component<ResultsScreenProps>{

    static navigationOptions = ({ navigation }) => {
        return {
          title: "Results for " + navigation.getParam("query", " "),
        };
    };

    constructor(props: ResultsScreenProps){
        super(props)
        this.props.navigation.setParams({title:"Results"})
    }
    render(){
        let {query, platform} = this.props.navigation.state.params;
        return(
            <View style={{flex:1}}>
                <StatusBar backgroundColor="blue"/>
                {/* <Text style={{flex:1, backgroundColor:"red"}}> This is results for {query} in {platform}</Text> */}
                <View style={{flex:1}}>
                <ConcreteSearchResultsBuilder query={query} platform={platform}/>
                </View>
            </View>
        )
    }
}