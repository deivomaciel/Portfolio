import './styles.css'
import { RiFileCopyLine } from 'react-icons/ri'
import { BsLinkedin, BsGithub, BsFillCheckCircleFill } from 'react-icons/bs'
import { useRef } from 'react'

export default function Contacts() {
    const copied = useRef(null)

    const copyEmail = () => {
        navigator.clipboard.writeText('deividemaciel2@gmail.com')
        copied.current.style.transform = 'translateX(0)'
        copied.current.style.opacity = 1
        setTimeout(() => {
            copied.current.style.transform = 'translateX(100vw)'
            copied.current.style.opacity = 0
        }, 2000)
    }

    return (
        <footer id='contact'>
            <h2>Contato</h2>
                <div className='email-container'>
                    <p>deividemaciel2@gmail.com</p>
                    <button className='copy-btn' onClick={copyEmail}><span><RiFileCopyLine size={20}/></span></button>
                </div>
                <div className='contacts-container'>
                    <div className='links-container'>
                        <a href='https://www.linkedin.com/in/deivide-maciel' alt='Linkedin' target='_blank'><BsLinkedin size={32}/></a>
                    </div>
                    <div className='links-container'>
                        <a href='https://github.com/deivomaciel/' alt='Github' target='_blank'><BsGithub size={32}/></a>
                    </div>
                </div>

                <div className='copied' ref={copied}>
                    <span><BsFillCheckCircleFill size={24}/></span>
                    E-mail copiado
                </div>
        </footer>
    )
}