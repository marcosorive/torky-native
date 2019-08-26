import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Overlay, Input, Text} from 'react-native-elements';
import {StoreButton} from '../components/StoreButton';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import {Platform} from '../common/models/Platform';


type SearchbarState = {
    platform: string,
    gameQuery: string,
    overlayVisible: boolean,
    errorStyle: object,
    errorMessage: string
};

class SearchbarNoNavigation extends Component<NavigationInjectedProps,SearchbarState>{

    constructor(props: NavigationInjectedProps){
        super(props)
        this.state = {
            platform: undefined,
            gameQuery: undefined,
            overlayVisible: false,
            errorStyle: {},
            errorMessage: undefined,            
        }
        this.hideOverlay = this.hideOverlay.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handlePlaftormChange = this.handlePlaftormChange.bind(this);
    }

    handlePlaftormChange(platform: Platform){
        this.setState({
            platform: platform,
        })
        this.hideOverlay();
    }

    hideOverlay(): void{
        this.setState({
            overlayVisible:false
        })
    }

    handleSearch():void{
        if(!this.state.gameQuery){
            this.setState({
                errorStyle:{ color: 'red' },
                errorMessage:"Introduce un juego, por favor"
            });
            return;
        }
        this.setState({
            errorStyle:{},
            errorMessage:""
        });
        this.props.navigation.navigate("Results", {query: this.state.gameQuery, platform: this.state.platform})
    }

    render(){
        return(
            <View style={styles.searchContainer}>
                <Overlay
                    isVisible={this.state.overlayVisible}
                    animationType="slide"
                    windowBackgroundColor="rgba(255, 255, 255, .8)"
                    overlayBackgroundColor="white"
                    borderRadius={.8}
                    onBackdropPress={this.hideOverlay}
                    height="auto"
                >   
                    <View >
                        <Text h4 style={styles.overlayTitle}>Selecciona una plataforma</Text>
                        <StoreButton onPress={this.handlePlaftormChange}  title={Platform.All}/>
                        <StoreButton onPress={this.handlePlaftormChange}  title={Platform.Pc}/>
                        <StoreButton onPress={this.handlePlaftormChange}  title={Platform.Nintendo}/>
                        <StoreButton onPress={this.handlePlaftormChange}  title={Platform.Xbox}/>
                        <StoreButton onPress={this.handlePlaftormChange}  title={Platform.Playstation}/>
                    </View>
                </Overlay>
                <Input
                    containerStyle={styles.queryInput}
                    errorStyle={this.state.errorStyle}
                    onChangeText={text => this.setState({ gameQuery:text })}
                    value={this.state.gameQuery}
                    placeholder="Ej: Super smash Bros. Ultimate"
                    errorMessage={this.state.errorMessage}
                />
                <Button
                    containerStyle={styles.platformSelectButtonContainer}
                    buttonStyle={styles.platformSelectButton}
                    onPress={() => {
                        this.setState({overlayVisible:true});
                    }}
                    title={this.state.platform || "Selecciona una plataforma"}
                />
                <Button
                    buttonStyle={styles.searchButton}
                    onPress={this.handleSearch}
                    title="Buscar"
                />
            </View>
        )
    }
}

export const Searchbar = withNavigation(SearchbarNoNavigation);

const styles = StyleSheet.create({
    searchContainer:{
        marginRight:10,
        marginLeft:10,
        flex:4,
        flexDirection: "column",
        justifyContent:"flex-start",
    },
    overlayTitle:{
        textAlign:"center",
        marginBottom:30
    },
    queryInput:{ 
        marginBottom:15,
    },
    platformSelectButtonContainer:{
        flexDirection: "row",
        justifyContent:"center" 
    },
    platformSelectButton:{
        width:230,
        marginBottom:30,
        backgroundColor:"#0056b3",
    },
    searchButton:{
        backgroundColor:"#0056b3",
                
    }
});