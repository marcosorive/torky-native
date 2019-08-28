import React from 'react'
import {ApiResponse} from '../common/models/ApiResponse';
import {Anchor} from './Anchor';
import {ActivityIndicator,Text, View, StyleSheet} from 'react-native';
import { Card } from 'react-native-elements';

type ConcreteResultProps = {
    query:string,
    store: string,
    verboseStore: string,
}

type ConcretResultState = {
    query:string, 
    store:string,
    isLoaded: boolean,
    results: ApiResponse,
    error: string,
}

export class ConcreteSearchResult extends React.Component<ConcreteResultProps,ConcretResultState>{

    mounted:boolean;

    constructor(props: ConcreteResultProps){
        super(props)
        this.mounted = true;
        this.state={
            query:this.props.query,
            store:this.props.store,
            isLoaded:false,
            results:undefined,
            error:undefined,
        }
        this.fetchApiResults = this.fetchApiResults.bind(this);        
    }


    async fetchApiResults(){
        try{
            const response = await fetch("http://torky.herokuapp.com/api/search/"+this.props.query+"/"+this.props.store,{
                mode:"cors",
            });
            if(response.ok && this.mounted){
                this.setState({
                    isLoaded:true,
                    results: await response.json(),
                })
            }else{
                if(this.mounted){
                    this.setState({
                        isLoaded:true,
                        error:response.statusText,
                    })
                }
            }
        }
        catch(error){
            if(this.mounted){
                this.setState({
                    isLoaded:true,
                    error:error.message,
                })
            }
        }
    }

    componentDidMount(){
        this.mounted=true;
        this.fetchApiResults()
    }

    componentDidUpdate(){
        if( this.props.query !== this.state.query || this.props.store !== this.state.store){
            if(this.mounted){
                this.setState({
                    query:this.props.query,
                    store:this.props.store,
                    isLoaded:false,
                    results:undefined,
                    error:undefined
                
                })
            }            
            this.fetchApiResults();
        }
    }

    componentWillUnmount(){
        this.mounted=false;
      }

    render(){
        let {results, error, isLoaded} = this.state;
        let cardContent = undefined;
        if(results === undefined){
            error="Se he encontrado un error"
        }
        if( !isLoaded){
            cardContent = <ActivityIndicator size="large" color="#0000ff" />
        }else if(error){
            cardContent = <Text style={styles.error}>No se ha podido encontrar el precio</Text>
        }else{
            cardContent = ( <View>
                                <Text style={styles.name}>{results.gamename}</Text>
                                <Text style={styles.price}>{results.price}</Text>                                
                                <Anchor url={results.url}/>
                            </View>
                            )
        }
        return(
            <Card title={this.props.verboseStore} containerStyle={styles.card}>         
                {cardContent}
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    error:{
        textAlign:"center",
        fontWeight: "bold"
    },
    name:{
        textAlign:"center",
        fontWeight: "bold",
        marginBottom: 20,
        fontSize: 15
    },
    price:{
        textAlign:"center",
        fontSize: 20,
        marginBottom: 10 },
    card:{
        marginBottom: 20
    }
})
