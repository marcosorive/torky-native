import React from 'react'
import {ApiResponse} from '../common/models/ApiResponse';
import {ActivityIndicator,Text} from 'react-native';
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
    error: string
}

export class ConcreteSearchResult extends React.Component<ConcreteResultProps,ConcretResultState>{

    constructor(props: ConcreteResultProps){
        super(props)
        this.state={
            query:this.props.query,
            store:this.props.store,
            isLoaded:false,
            results:undefined,
            error:undefined
        }
        this.fetchApiResults = this.fetchApiResults.bind(this);
    }

    async fetchApiResults(){
        try{
            let response = await fetch("http://torky.herokuapp.com/api/search/"+this.props.query+"/"+this.props.store,{
                mode:"cors",
            });
            if(response.ok){
                this.setState({
                    isLoaded:true,
                    results: await response.json(),
                })
            }else{
                this.setState({
                    isLoaded:true,
                    error:response.statusText,
                })
            }
        }
        catch(error){
            this.setState({
                isLoaded:true,
                error:error.message,
            })
        }
    }

    componentDidMount(){
        this.fetchApiResults()
    }

    componentDidUpdate(){
        if( this.props.query !== this.state.query || this.props.store !== this.state.store){
            this.setState({
                    query:this.props.query,
                    store:this.props.store,
                    isLoaded:false,
                    results:undefined,
                    error:undefined
                
            })
            this.fetchApiResults();
        }
    }
    render(){
        if( ! this.state.isLoaded){
            return(
                <Card title={this.props.verboseStore}>         
                    <ActivityIndicator size="large" color="#0000ff" />
                </Card>
            )
        }else if(this.state.error){
            return(
                <Text>No se ha podido encontrar el precio</Text>
            )
        }else{
            let res=this.state.results;
            return(
                <Card
                    title={this.props.verboseStore}>
                    <Text style={{marginBottom: 10, textAlign: "center"}}>{res.price}</Text>
				    <Text>{res.gamename}</Text>
				    <Text>Precio:   - {res.url} - Comprar</Text>
                </Card>
                
            )
        }
        
    }
}