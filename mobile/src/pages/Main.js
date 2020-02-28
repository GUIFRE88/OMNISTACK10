import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'

import { requestPermissionsAsync, getCurrentPositionAsync, stopLocationUpdatesAsync } from 'expo-location'

import { MaterialIcons } from '@expo/vector-icons'

function Main({navigation}){

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

    return (
        <>
        <MapView  initialRegion={currentRegion} style={styles.map}>
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
        <View style={styles.searchForm}>
            <TextInput  style={styles.searchInput}
                        placeholder="Buscar devs por Techs..."
                        placeholderTextColor="#999"
                        autoCapitalize="words"
                        autoCorrect={false}
            />
            <TouchableOpacity onPress={ () => {} } style={styles.loadButton}>
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
        bottom: 20,
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