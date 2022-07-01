import React from 'react'
import Home from './Home'
import { PlaylistProvider } from './PlaylistContext'


const App = () => {
  return (
    <>
      <h1>Home Page</h1>
      <PlaylistProvider>
        <Home />
      </PlaylistProvider>
    </>

  )
}

export default App