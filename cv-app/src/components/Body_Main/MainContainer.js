//Body.js will contain the main cards containing CV material such as
//Profile Summary, experience, educaiton and Hobbies

import style from './MainContainer.module.css';
import Card from '../ui/Card';

//Container for object values. Provides main HTML setup for when values are passed in
//Card wrapper acts as parent and gives HTML components certain design aspects
//Main goal here was to provide an area for the initial CV aspects such as Nam, profile and education
function MainContainer(props) {
    return <li className={style.container}>
        <Card>
            <div className={style.image}>
                <img src={props.image} alt={props.title} />
            </div>

            <div className={style.content}>
                <h1>{props.title}</h1>
                <h3>{props.address}</h3>

                <p>{props.description}</p>
                <p>{props.add_description}</p>

                <p>{props.title2}</p>
                <p>{props.description2}</p>
                <p>{props.add_description2}</p>
            </div>

            <div className={style.actions}>
               
            </div>
        </Card>
    </li>
}

export default MainContainer;