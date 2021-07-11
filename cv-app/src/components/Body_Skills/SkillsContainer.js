import style from './SkillsContainer.module.css';
import Card from '../ui/Card';

//Container for object values. Provides main HTML setup
//goal here was to provide a place for skills input. Structure is based off my own CV
//However would like to utilise more of REACts functionality to reduce repetitive code
function SkillsContainer(props) {
    return <li className={style.container}>
        <Card>
            <div className={style.image}>
                <img src={props.image} alt={props.title} />
            </div>

            <div className={style.content}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>

                <h2>{props.title2}</h2>
                <p>{props.description2}</p>

                <h2>{props.title3}</h2>
                <p>{props.description3}</p>

                <h2>{props.title4}</h2>
                <p>{props.description4}</p>

            </div>
        </Card>
    </li>
}

export default SkillsContainer;