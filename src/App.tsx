import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonalList from './component/PersonalList'
import PersonalAdd from './component/PersonalAdd'
import PersonalDetail from './component/PersonalDetail'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainNavbar from './component/MainNavbar'

function App() {

  return (
    <div className="head">
      <Router>
      <div className="App">
        <MainNavbar />
        <Routes>
          <Route path="/" element={<PersonalList />} />
          <Route path="/add" element={<PersonalAdd />} />
          <Route path="/detail/:id" element={<PersonalDetail />} />
        </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App
