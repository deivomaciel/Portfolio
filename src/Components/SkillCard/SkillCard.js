import './styles.css'

export default function SkillCard(props) {
    return (
        <div className='skill-card-container'>
            <span>
                {props.logo}
            </span>
            <h3>{props.title}</h3>
        </div>
    )
}