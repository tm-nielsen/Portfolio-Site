import React from 'react'
// import {games} from './games'
// import {Game} from './Game'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Home from './routes/Home'
import About from './routes/About'
import Games from './routes/Games'
import Blog from './routes/Blog'

const App = () => {
  return <Router>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/games' element={<Games/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='*' element={
        <h1>Error</h1>
      }/>
    </Routes>
  </Router>
}


export default App;