import style from './ProfileContainer.module.css';
import Card from '../ui/Card';

//Container for object values. Provides main HTML setup
//Profile container will create a card like area for brief profile information
//such as including a profile picture, name, contact info, etc.
//will be wrapped around card ui javascript function for styling and palced on left side of 
//the Main container
function ProfileContainer(props) {
    return <li className={style.container}>
        <Card>
            <div className={style.image}>
                <img src={props.image} alt={props.title} />
            </div>

            <div className={style.content}>
                <h2>{props.email_title}</h2>
                <p>{props.email}</p>

                <h2>{props.linked_in_title}</h2>
                <p> {props.linked_in} </p>

                <h2>{props.mobilenum_title}</h2>
                <p>{props.mobile_number}</p>

                <h2>{props.address_title}</h2>
                <p link={props.maps_link}>{props.address}</p>
            </div>

        </Card>
    </li>
}

export default ProfileContainer;