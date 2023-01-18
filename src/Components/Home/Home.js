import React, { useEffect } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import photo from '../../assets/ft_perfil.png'
import './styles.css'

export default function Home() {
    useEffect(() => {
        const text = document.querySelector('.glitch')
        const span = document.querySelectorAll('.glitch span')
    
        setInterval(() => {
            text.style.animation = 'glitch 500ms infinite'
            span.forEach(el => {
                el.style.display = 'block'
            })
        }, 1000)
    
        setInterval(() => {
            text.style.animation = 'StopGlitch'
            span.forEach(el => {
                el.style.display = 'none'
            })
        }, 2000)
    })

    return (
        <main id="home">
            <div className='container'>
                <div className='img-content'>
                    <img src={photo} alt="Ilustração"/>
                </div> 

                <div className="name-container">
                    <h1 className="glitch">
                        <span aria-hidden="true">Deivide Maciel</span>
                            Deivide Maciel
                        <span aria-hidden="true">Deivide Maciel</span>
                    </h1>
                    <p>Desenvolvedor Front-End</p>
                </div>
            </div>

            <div className="scroll-down-container">
                <a href="#about"><IoMdArrowDropdown size={32} /></a>
            </div>
        </main>
    )
}