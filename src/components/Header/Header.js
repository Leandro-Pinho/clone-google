
import React from 'react'
import imgMenu from '../../assets/img-menu.svg'
import imgPerfil from '../../assets/img-perfil.svg'
import "./index.css"

const Header = () => {
  return (
    <div className='nav'>
      <h2>Gmail</h2>
      <h2>Imagens</h2>
      <img src={imgMenu} alt='img-menu'/>
      <img src={imgPerfil} alt='img-perfil'/>
    </div>
  )
}

export default Header
