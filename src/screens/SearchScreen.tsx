import React from 'react';
import { StyleSheet, KeyboardAvoidingView,StatusBar} from 'react-native';
import {Header} from '../components/Header'
import {Searchbar} from '../components/Searchbar'
import {NavigationParams,NavigationScreenProp, NavigationState,} from 'react-navigation';
interface SearchScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  }
export class SearchScreen extends React.Component<SearchScreenProps> {
    constructor(props:SearchScreenProps){
      super(props)
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.flexible} enabled behavior="height">
                <StatusBar translucent={true}/>
                <Header/>
                <Searchbar/>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
  flexible : {
    flex:1,
    backgroundColor:"#efefef"
  },
});
