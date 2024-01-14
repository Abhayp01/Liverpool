import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from './components/Error.jsx';
import App from './App.jsx'
import './index.css'
import Matches from './components/Matches/matches.jsx';
import About from './components/About/About.jsx';
import Root from './Root.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Root/>} errorElement={<ErrorPage />}>
          <Route path="/" element={<App />} errorElement={<ErrorPage />}/>
          <Route path="/about" element={<About/>} errorElement={<ErrorPage />}/>
          <Route path="/matches" element={<Matches/>} errorElement={<ErrorPage />}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
