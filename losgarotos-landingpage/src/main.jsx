import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar.jsx'
import Jumbotron from './Jumbotron-button.jsx'
import Modal from './Modal.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Jumbotron />
    <Modal />
    <Card />
    <Footer />
  </StrictMode>,
)
