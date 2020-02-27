import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'

import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

function Main(){

    const [currentRegion, setCurrentRegion] = useState(null) // Cria estado para a latitude e longitude

    useEffect(()=>{
        async function loadInitialPosition(){
           const {granted} = await requestPermissionsAsync() // Pede permissão ao usuário, para buscar a localização.
           if(granted){
               const { coords } = await getCurrentPositionAsync({
                   enableHighAccuracy: true, // Habilita a utilização do GPD.
               }) // Busca a localização.

               const { latitude, longitude } = coords

               // Seta os valores da latitude e longitude.
               setCurrentRegion({
                   latitude,
                   longitude,
                   latitudeDelta:0.04, // Determina o Zoom do mapa
                   longitudeDelta:0.04,
               })
           }
        }
        loadInitialPosition() // Executa a função assim que o useEffect for executado. 
    },[])

    // Verifica se a localização está nula.
    if(!currentRegion){
        return null
    }

    return <MapView  initialRegion={currentRegion} style={styles.map}>
        <Marker coordinate={{ latitude: -27.2111164, longitude: -49.6374491}}>
            <Image style={styles.avatar} source={ { uri: 'https://avatars1.githubusercontent.com/u/36928790?s=460&v=4'} }/>
            <Callout onPress={ ()=>{ // Cria função de navegação ao ter o click
                navigation.navigate('Profile', { github_username: 'GUIFRE88' } ) // Chama a tela profile e passa parâmetros. 
            } }>
                <View style={styles.callout}>
                    <Text style={styles.devName}>Guilherme Freudenburg</Text>
                    <Text style={styles.devBio}>Desenvolvedor</Text>
                    <Text style={styles.devTechs}>Advpl, React, Nodejs</Text>
                </View>
            </Callout>
        </Marker>
    </MapView>
}

const styles = StyleSheet.create({
    map:{
        flex: 1
    },
    avatar:{
        width: 54,
        height: 54,
        borderRadius:4,
        borderWidth: 4,
        borderColor: '#FFF',
    },

    callout:{
        width: 260,
    },

    devName:{
        fontWeight: 'bold',
        fontSize: 16,
    },

    devBio: {
        color: '#666',
        marginTop: 5,
    },
    devTechs:{
        marginTop: 5,
    },
})

export default Main