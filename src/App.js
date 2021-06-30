import React from 'react'
import styled from 'styled-components'

const url = 'http://gateway.marvel.com/v1/public/comics'
const apiKey = ''
const ts = ''
const hash = ''
const headers = { Headers: { Accept: '*/*' } }

const credentials = { apiKey, ts, hash, headersd, headers }

const App = () => {
    // fetch(url, credentials)

    return (
        <AppContainer>
            <h1>Learn about applications offline</h1>
        </AppContainer>
    )
}

export default App

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
`