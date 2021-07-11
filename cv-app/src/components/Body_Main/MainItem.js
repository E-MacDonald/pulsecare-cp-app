//MainItem is going to manage the creation of items for the body

import MainContainer from './MainContainer';
import classes from './MainItem.module.css';

//Maps values from passed in data
//Wrapped around container to provide Maincontainer styling
function MainItem(props) {
    return (
        <ul className={classes.list}>
            {props.content.map((content) => (

                <MainContainer
                    key={content.id}
                    id={content.id}
                    image={content.image}
                    title={content.title}
                    description={content.description}
                    add_description={content.add_description}

                    title2={content.title2}
                    description2={content.description2}
                    add_description2={content.add_description2}

                />
            ))}
        </ul>
    );
}

export default MainItem;