import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationParams,NavigationScreenProp, NavigationState, ScrollView,} from 'react-navigation';
import {P} from '../components/textComponents/Paragraph';
import {Q} from '../components/textComponents/Question';
import {Anchor} from '../components/Anchor';
type AboutScreenProps={
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
export class AboutScreen extends React.Component<AboutScreenProps>{
    constructor(props: AboutScreenProps){
        super(props)
    }
    render(){
        return(
            <View style={{flex:1, justifyContent:"flex-end",  backgroundColor:"#efefef"}}>
                <View  style={{flex:0.2}}>
                    <Text style={{ textAlign:"center", fontSize:30, marginTop:30 }}>Sobre Torky</Text>
                </View>
                <ScrollView style={{flex:3, marginLeft:20, marginRight:20}}> 
                <P>Este es un pequeño proyecto que he creado como parte de mi aprendizaje como desarrollador, así que no siempre funciona a la perfección. Dejo un pequeño FAQ.</P>
                <Q>¿Por qué Game y Nintendo tardan más y muchas veces no funcionan?</Q>
                <P>La web de Game (en mi experiencia) se basa fuertemente en javascript y carga dinámica de contenidos. Mi sistema se basa en hacer una búsqueda y obtener el precio, pero el servidor de Game devuelve una web "vacía" y luego lo "rellena". Prueba de esto es que cuando buscas durante unos segundos ves un mensaje de "Cargando..." y después aparecen los resultados. Sigo trabajando para mejorar mi sistema, espero poder arreglarlo en el futuro. </P>
                <Q>¿Solo 5 tiendas? ¿Habrá más?</Q>
                <P>En mi experiencia como comprador de videojuegos, Amazon, Fnac, Game e Instant Gaming son los sitios con mejores precios y además fiables. El Corte inglés es caro, pero quería añadir alguna más ver otras opciones. Si quieres aparecer contacta conmigo.</P>
                <Q>¿El servicio es gratis? ¿Hay costes añadidos?</Q>
                <P>Si, completamente gratis y lo seguirá siendo. Esto es parte de mi mejora como desarrollador y no pretendo ganar dinero con ello. Si puedo pagarme unas cervezas con los enlaces referidos me daré con un canto en los dientes :)</P>
                <Q>¿Eres desarrollador? </Q>
                <P>Si eres dev o simplemente te gusta la tecnología te cuento un poco más como está hecho esto. El back-end está hecho en python sobre Flask. Había trabajando antes con Django y me apetecía probar otro framework. Para el front-end he usado Bootstrap 4 y javascript vanilla. Bootstrap usa JQuery y ya que lo cargo desde el cdn podría haberlo usado, pero quería probar con JS puro.Para obtener los precios he creado un web scrapper usando BeautifulSoup, excepto para amazon que uso su API. Las webs de fnac, corte inglés e Instant gaming fueron muy fáciles de scrappear, la de Game me está costando un poco. Si quieres contactar conmigo por cualquier razón busca abajo el apartado de contacto.</P>
                <P>Puedes contactar conmigo de las siguiente formas:</P>
                <Anchor url="mailto:marcos@orive.me" title="Email"/>
                <Anchor url="https://twitter.com/marcosorive" title="Twitter"/>
                <Anchor url="https://github.com/marcosorive" title="Github"/>
                <Anchor url="https://marcos.orive.me" title="Web"/>
                </ScrollView>
            </View>
        )
    }
}