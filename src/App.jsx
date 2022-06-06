import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Category from './components/category'
import Logo from './components/Logo'
import Search from './components/SearchField'
import Pages from './pages/Pages'





function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Logo />
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
    </div>
  )
}

export default App
