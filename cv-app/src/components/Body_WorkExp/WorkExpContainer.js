import style from './WorkExpContainer.module.css';
import Card from '../ui/Card';

//Container for object values. Provides main HTML setup
//like the others, the goal here was to provide a place for work experience input. Structure is based off my own CV
//Again, while strucutre was set in order to produce a final product before deadline, would utilise REACT features more when Re-done
function WorkExpContainer(props) {
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

export default WorkExpContainer;