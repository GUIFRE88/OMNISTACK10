import React, { useState, useEffect } from 'react'

import './styles.css'

function DevForm( { onSubmit } ){

    // Cria variaveis para setar os valores. 
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [github_username, setGitHubUserName] = useState('')
    const [techs, setTechs] = useState('')

    // Busca a latitude e longitude de usuário.
    useEffect(()=>{
        // Identifica a Geolocalização do Browser
        navigator.geolocation.getCurrentPosition(
          (position)=>{ // Caso conseguiu buscar o valor
    
            const {latitude, longitude} = position.coords // Busca a latitude e longitude.
    
            setLatitude(latitude) // Seta os valores. 
    
            setLongitude(longitude) // Seta os valores. 
    
          },
          (err)=>{ // Caso deu erro.
            console.log(err)
          },
          { // Tempo de espera para conseguir o valor.
            timeout: 30000,
          }
        )
      }, [])

    async function handleSubmit(e){
        e.preventDefault()

        await onSubmit( {
                github_username,
                techs,
                latitude,
                longitude
              } ) // Executa a função handleDev que foi enviado pelo elemtno pai

        // Após a chamada a API apaga os campos em tela.
        setGitHubUserName('')
        setTechs('')
        
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="input-block">
            <label htmlFor="github_username">Usuário</label>
            <input 
                name="github_username" 
                id="github_username" 
                required 
                value={github_username} 
                onChange={e => 
                setGitHubUserName(e.target.value)} 
            />
            </div>

            <div className="input-block">
            <label htmlFor="techs">Tecnlogias</label>
            <input 
                name="techs" 
                id="techs" 
                required 
                value={techs} 
                onChange={e => setTechs(e.target.value)}
            />
            </div>

            <div className="input-group">
            <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input 
                name="latitude" 
                type="number" 
                id="latitude" 
                required 
                value={latitude} 
                onChange={e => setLatitude(e.target.value)}
                />
            </div>
            <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input 
                name="longitude" 
                type="number" 
                id="longitude" 
                required 
                value={longitude} 
                onChange={e => setLongitude(e.target.value)}
                />
            </div>
            </div>

            <button type="submit">Salvar</button>

      </form>
    )
}

export default DevForm