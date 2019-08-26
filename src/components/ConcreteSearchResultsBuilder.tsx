import React from 'react';
import {ConcreteSearchResult} from './ConcreteSearchResult';
import {Platform} from '../common/models/Platform';
import { ScrollView, Text} from 'react-native';

type Store = {
    store: string,
    verboseStore: string
}

type ResultBuilderProps = {
    query:string,
    platform: string,
}

export class ConcreteSearchResultsBuilder extends React.Component<ResultBuilderProps>{

    constructor(props:ResultBuilderProps ){
        super(props)
    }

    render(){
        let stores: Store[] = []
        switch(this.props.platform){
            case Platform.All:
                stores=[
                    {store:"amazon", verboseStore:"Amazon"},
                    {store:"fnac", verboseStore:"Fnac"},
                    {store:"game", verboseStore:"Game"},
                    {store:"corte_ingles", verboseStore:"El corte inglés"},
                    {store:"instant_gaming", verboseStore:"Instant Gaming"},
                    {store:"steam", verboseStore:"Steam"},
                    {store:"nintendo", verboseStore:"Nintendo eShop"},
                    {store:"playstation", verboseStore:"Playstation Store"},
                    {store:"xbox", verboseStore:"Xbox"}
                ]
                break;     
            case Platform.Pc:
                stores=[
                    {store:"steam", verboseStore:"Steam"},
                    {store:"amazon", verboseStore:"Amazon"},
                    {store:"fnac", verboseStore:"Fnac"},
                    {store:"game", verboseStore:"Game"},
                    {store:"corte_ingles", verboseStore:"El corte inglés"},
                    {store:"instant_gaming", verboseStore:"Instant Gaming"},
                ]
                break;     
            case Platform.Nintendo:
                stores=[
                    {store:"amazon", verboseStore:"Amazon"},
                    {store:"fnac", verboseStore:"Fnac"},
                    {store:"game", verboseStore:"Game"},
                    {store:"corte_ingles", verboseStore:"El corte inglés"},
                    {store:"instant_gaming", verboseStore:"Instant Gaming"},
                    {store:"nintendo", verboseStore:"Nintendo eShop"}
                ]
                break;     
            case Platform.Playstation:
                stores=[
                    {store:"amazon", verboseStore:"Amazon"},
                    {store:"fnac", verboseStore:"Fnac"},
                    {store:"game", verboseStore:"Game"},
                    {store:"corte_ingles", verboseStore:"El corte inglés"},
                    {store:"instant_gaming", verboseStore:"Instant Gaming"},
                    {store:"playstation", verboseStore:"Playstation Store"}
                ]
                break;     
            case Platform.Xbox:
                stores=[
                    {store:"amazon", verboseStore:"Amazon"},
                    {store:"fnac", verboseStore:"Fnac"},
                    {store:"game", verboseStore:"Game"},
                    {store:"corte_ingles", verboseStore:"El corte inglés"},
                    {store:"instant_gaming", verboseStore:"Instant Gaming"},
                    {store:"xbox", verboseStore:"Xbox"}
                ]
                break;     
            default:
                stores=[
                    {store:"amazon", verboseStore:"Amazon"},
                    {store:"fnac", verboseStore:"Fnac"},
                    {store:"game", verboseStore:"Game"},
                    {store:"corte_ingles", verboseStore:"El corte inglés"},
                    {store:"instant_gaming", verboseStore:"Instant Gaming"}
                ]
                break;          
        }
        return(
            <ScrollView style={{marginBottom: 20}}>
                {stores.map((store) => {
                    return(
                        <ConcreteSearchResult query={this.props.query} key={store.store} store={store.store} verboseStore={store.verboseStore}/>
                    )
                })} 
            </ScrollView>
        )
    }
}