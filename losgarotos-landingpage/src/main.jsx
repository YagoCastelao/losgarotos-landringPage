import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Jumbotron from './components/Jumbotron/Jumbotron-button.jsx'
import Modal from './components/Modal/Modal.jsx'
import Card from './components/Card/Card.jsx'
import Footer from './components/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Jumbotron />
    <Modal />
    <Card />
    <Footer />
  </StrictMode>,
)
