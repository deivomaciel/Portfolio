import SkillCard from "../SkillCard/SkillCard"
import "./styles.css"
import { FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { GrReactjs } from "react-icons/gr"
import { TbBrandNextjs } from "react-icons/tb"
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"
import { useEffect, useRef } from "react"

export default function About() {
    const slider = useRef(null)
    const about = useRef(null)

    useEffect(() => {
        about.current.style.marginTop = `-${(window.screen.height - window.screen.availHeight)}px`
    }, [])

    const handleSide = direction => slider.current.scrollLeft += direction * 300

    return (
        <section id="about" className="about-container" ref={about}>
            <div className="about-content">
                <h2>Sobre mim</h2>
                <p>Sou um desenvolvedor front-end apaixonado por tecnologia e sempre em busca de aprender novas habilidades.<br/><br/>Tenho as habilidades necessárias para construir projetos incríveis, incluindo HTML, CSS, JavaScript, ReactJS e NodeJS. Como autodidata, me orgulho de ter desenvolvido vários projetos pessoais utilizando essas tecnologias.</p>
            </div>
            <div className="skills-container">
                <button className="left-btn btn" onClick={() => handleSide(-1)}>
                    <span>
                        <MdArrowBackIosNew size={24} />
                    </span>
                </button>

                <div className="skills-grid" ref={slider}>
                    <SkillCard title="HTML" logo={<FaHtml5 size={50}/>}/>
                    <SkillCard title="CSS" logo={<FaCss3Alt size={50}/>} />
                    <SkillCard title="JavaScript" logo={<IoLogoJavascript size={50}/>} />
                    <SkillCard title="ReactJS" logo={<GrReactjs size={50}/>} />
                    <SkillCard title="NextJs" logo={<TbBrandNextjs size={50}/>} />
                    <SkillCard title="NodeJS" logo={<FaNodeJs size={50}/>} />
                    <SkillCard title="Git" logo={<FaGitAlt size={50}/>} />
                    <SkillCard title="Github" logo={<FaGithub size={50}/>} />
                </div>

                <button className="right-btn btn" onClick={() => handleSide(1)}>
                    <span>
                        <MdArrowForwardIos size={24} />
                    </span>
                </button> 
            </div>
        </section>
    )
}