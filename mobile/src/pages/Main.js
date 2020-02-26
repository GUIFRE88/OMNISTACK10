import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

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

    return <MapView  initialRegion={currentRegion} style={styles.map}/>
}

const styles = StyleSheet.create({
    map:{
        flex: 1
    },
})

export default Main