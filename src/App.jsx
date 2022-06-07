import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Category from './components/category'
import Footer from './components/footer'
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
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
