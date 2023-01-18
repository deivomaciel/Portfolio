import { useEffect, useRef, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { AiFillHome, AiFillProject } from 'react-icons/ai'
import { IoMdContact } from 'react-icons/io'
import { IoMdInformationCircle } from 'react-icons/io'
import './styles.css'

export default function Header() {
    const menu = useRef(false)
    const closeMenu = useRef(false)
    let [menuState, setMenuState] = useState(false)

    useEffect(() => {
        window.screen.width >= 650 && (closeMenu.current.style.display = 'none')
    })

    const showMenu = () => {
        setMenuState(menuState = !menuState)
        if(menuState) {
            closeMenu.current.style.display = 'flex'
            menu.current.style.transform = 'translateX(0)'
            document.querySelector('html').style.overflowY = 'hidden'
        } else {
            menu.current.style.transform = 'translateX(100vw)'
            closeMenu.current.style.display = 'none'
            document.querySelector('html').style.overflowY = 'auto'
        }
    }

    return (
        <header>
            <h2>&lt;<em>DeivideMaciel</em>/&gt;</h2>
            <nav>
                <ul className="desk-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>

                <div className="close-menu" ref={closeMenu} onClick={showMenu}></div>

                <ul className="mobile-menu" ref={menu}>
                    <li onClick={showMenu} >
                        <a href="#home">
                            <span><AiFillHome /></span>
                            Home
                        </a>
                    </li>
                    <li onClick={showMenu}>
                        <a href="#about">
                            <span><IoMdInformationCircle /></span>
                            Sobre
                        </a>
                    </li>
                    <li onClick={showMenu}>
                        <a href="#projects">
                            <span><AiFillProject /></span>
                            Projetos
                        </a>
                    </li>
                    <li onClick={showMenu}  id="last">
                        <a href="#contact">
                            <span><IoMdContact /></span>
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>

            <button className="menu-btn" onClick={showMenu}>
                {
                    menuState ? <AiOutlineClose size={18} /> : <FiMenu size={18} />
                }
            </button>
        </header>
    )
}