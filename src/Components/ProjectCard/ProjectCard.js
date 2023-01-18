import './styles.css'

export default function ProjectCard(props) {
    return (
        <a href={props.link} target="_blank" className="card-container">
            <div className="image-content">
                <img src={props.img} alt="Foto do projeto" title={props.title}/>
            </div>

            <div className="card-head">
                <img src={props.icon}></img>
                <div className='card-info'>
                    <h2>{props.title}</h2>
                    <a href={props.link} target="_blank">{props.domain}</a>
                </div>
            </div>
        </a>
    )
}