import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'

import { requestPermissionsAsync, getCurrentPositionAsync, stopLocationUpdatesAsync } from 'expo-location'

import { MaterialIcons } from '@expo/vector-icons'

import api from '../services/api'

function Main({navigation}){

    const [devs, setDevs] = useState([]) // Cria estado para dados.

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

    async function loadDevs(){
        const {latitude, longitude} = currentRegion

        const response = await api.get('/search',{
           params: {
               latitude,
               longitude,
               techs: 'ReactJs'
           } 
        })

        setDevs(response.data.devs)
        
    }

    // Preenche a região conforme usuário mexer no mapa.
    function handleRegionChanged(region){
        setCurrentRegion(region)
    }

    // Verifica se a localização está nula.
    if(!currentRegion){
        return null
    }

    return (
        <>
        <MapView onRegionChangeComplete={handleRegionChanged} 
                 initialRegion={currentRegion} 
                 style={styles.map}>
        )

        {devs.map(dev => (
            <Marker key={dev._id} coordinate={{ latitude: dev.location.cordinates[1], longitude: dev.location.cordinates[0]}}>
                <Image style={styles.avatar} source={ { uri: dev.avatar_url} }/>
                <Callout onPress={ ()=>{ // Cria função de navegação ao ter o click
                    navigation.navigate('Profile', { github_username: dev.github_username } ) // Chama a tela profile e passa parâmetros. 
                } }>
                    <View style={styles.callout}>
                        <Text style={styles.devName}>{dev.name}</Text>
                        <Text style={styles.devBio}>{dev.bio}</Text>
                        <Text style={styles.devTechs}>{dev.techs.join(', ')}</Text>
                    </View>
                </Callout>
            </Marker>
        ) )}

        </MapView>
        <View style={styles.searchForm}>
            <TextInput  style={styles.searchInput}
                        placeholder="Buscar devs por Techs..."
                        placeholderTextColor="#999"
                        autoCapitalize="words"
                        autoCorrect={false}
            />
            <TouchableOpacity onPress={ loadDevs } style={styles.loadButton}>
                <MaterialIcons name="my-location"  size={20} color="#FFF"/>
            </TouchableOpacity>
        </View>
    </>
    )
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
    searchForm:{
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row',
    },
    searchInput:{
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2, 
    },
    loadButton:{
        width: 50,
        height: 50,
        backgroundColor: '#8E4Dff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
})

export default Main