import ProjectCard from '../ProjectCard/ProjectCard'
import slinkImage from '../../assets/slink.png'
import slinkFavicon from '../../assets/favicon_slink.png'
import velhaImage from '../../assets/velha.png'
import velhaFavicon from '../../assets/favicon_velha.png'
import snakeImage from '../../assets/snake.png'
import snakeFavicon from '../../assets/favicon_snake.png'
import netflixImage from '../../assets/netflix.png'
import netflixFavicon from '../../assets/favicon_netflix.png'
import spaceImage from '../../assets/space.png'
import spaceFavicon from '../../assets/favicon_space.png'
import { MdOutlineClose, MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'

import './styles.css'
import { useRef, useState } from 'react'

export default function Projects() {
    const popUp = useRef()
    const [inView, setInview] = useState(false)
    const slider = useRef(null)
    let firstProjects = []

    const projects = [
        {   
            id: 1,
            icon: slinkFavicon,
            title: 'Slink',
            link: 'https://slink-s.vercel.app/',
            domain: 'slink-s.vercel.app',
            image: slinkImage
        },
        {
            id: 2,
            icon: spaceFavicon,
            title: 'Space Invaders',
            link: 'https://spaceinvaderss.vercel.app/',
            domain: 'spaceinvaderss.vercel.app',
            image: spaceImage
        },
        {
            id: 3,
            icon: netflixFavicon,
            title: 'Netflix clone',
            link: 'https://github.com/deivomaciel/Netflix-Clone',
            domain: 'github.com/deivomaciel/Netflix-Clone',
            image: netflixImage
        },
        {
            id: 4,
            icon: snakeFavicon,
            title: 'Snake',
            link: 'https://snake-game-sable-delta.vercel.app/',
            domain: 'snake-game-sable-delta.vercel.app',
            image: snakeImage
        },
        {
            id: 5,
            icon: velhaFavicon,
            title: 'Jogo da Velha',
            link: 'https://jogo-da-velha-on.vercel.app/',
            domain: 'jogo-da-velha-on.vercel.app',
            image: velhaImage
        },
        {
            id: 5,
            icon: velhaFavicon,
            title: 'Jogo da Velha',
            link: 'https://jogo-da-velha-on.vercel.app/',
            domain: 'jogo-da-velha-on.vercel.app',
            image: velhaImage
        },
    ]

    const showMore = (state, flow) => {
        setInview(state)
        document.querySelector('html').style.overflowY = flow
    }

    const handleSide = direction => slider.current.scrollLeft += direction * 420

    const addFirstProjects = () => {
        for(let i = 0; i < 5; i++) {
            firstProjects.push(projects[i])
        }
    }

    addFirstProjects()

    return (
        <section id="projects" className="projects-section">
            <div className='projects-info'>
                <h2>Projetos</h2>
            </div>
            <div className='grid-container'>
                <div className="grid-content">
                    {
                        firstProjects.map(project => {
                            return (
                                <ProjectCard 
                                    key={project.id}
                                    icon={project.icon}
                                    domain={project.domain}
                                    link={project.link}
                                    title={project.title}
                                    img={project.image}
                                />
                            )
                        })
                    }

                    <button className="view-more" onClick={() => {showMore(true, 'hidden')}}>
                        Ver todos os projetos
                        <span><BsArrowRight /></span>
                    </button>
                </div>
            </div>
            {
                inView &&
                    <div className="all-project-pop-up" ref={popUp}>
                        <div className="show-more-header">
                            <h2>&lt;<em>DeivideMaciel</em>/&gt;</h2>

                            <button className="hide-pop-up" onClick={() => {showMore(false, 'auto')}}>
                                <MdOutlineClose size={24}/>
                            </button>
                        </div>
                        <div className="slider-container">
                            <h2>Projetos</h2>
                            
                            <div className="slider-content">
                                <div className="slider" ref={slider}>
                                    <button className="left-btn btn" onClick={() => handleSide(-1)}>
                                        <span>
                                            <MdArrowBackIosNew size={24} />
                                        </span>
                                    </button>
                                    {
                                        projects.map(project => {
                                            return (
                                                <ProjectCard 
                                                    key={project.id}
                                                    icon={project.icon}
                                                    domain={project.domain}
                                                    link={project.link}
                                                    title={project.title}
                                                    img={project.image}
                                                />
                                            )
                                        })
                                    }
                                    <button className="right-btn btn" onClick={() => {handleSide(1)}}>
                                        <span>
                                            <MdArrowForwardIos size={24} />
                                        </span>
                                    </button> 
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </section>
    )
}