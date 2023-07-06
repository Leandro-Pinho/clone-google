import React from 'react'
import "./index.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-superior'>
        <h2>Brasil</h2>
      </div>
      <div className='footer-inferior'>
        <div className='footer-list'>
          <h2>Sobre</h2>
          <h2>Publicidade</h2>
          <h2>Negócios</h2>
          <h2>Como funciona a Pesquisa</h2>
        </div>
        <div className='footer-list'>
          <h2>Privacidade</h2>
          <h2>Termos</h2>
          <h2>Configurações</h2>
        </div>
      </div>
    </div>
  )
}

export default Footer
