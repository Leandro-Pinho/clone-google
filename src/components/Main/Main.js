import React from 'react'
import logoGoogle from '../../assets/logo-google.svg'
import lupa from '../../assets/icon-lupa.svg'
import teclado from '../../assets/icon-teclado.svg'
import micro from '../../assets/icon-microfone.svg'
import safe from '../../assets/icon-safe.svg'
import "./index.css"

const Main = () => {
    return (
        <div className='main'>
            <img src={logoGoogle} alt='logo' />
            <div className='search'>
                <input type='text' />
                <img src={lupa} alt='lupa' className='lupa' />
                <img src={teclado} alt='teclado' className='teclado' />
                <img src={micro} alt='micro' className='micro' />
            </div>
            <div className='button'>
                <button>Pesquisa Google</button>
                <button>Estou com sorte</button>
            </div>
            <div className='privacy'>
                <img src={safe} alt='safe' />
                <h3><a href='#'>Faça o Check-up de privacidade</a></h3>
            </div>
        </div>
    )
}

export default Main
