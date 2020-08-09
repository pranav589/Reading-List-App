import React from 'react';
import BookContextProvider from './contexts/BookContextProvider'
import Navbar from './components/Navbar'

function App(){
  return(
    <div className="App">
      <BookContextProvider>
        <Navbar/>
      </BookContextProvider>
    </div>
  )
}

export default App