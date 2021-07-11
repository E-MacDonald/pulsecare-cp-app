import WorkExpContainer from './WorkExpContainer';
import classes from './WorkExpItem.module.css';

//Maps values from passed in data
//Wrapped around container to provide styling 
function WorkExpItem(props) {
    return (
        <ul className={classes.list}>
            {props.content.map((content) => (

                <WorkExpContainer
                    key={content.id}
                    id={content.id}
                    image={content.image}
                    title={content.title}
                    description={content.description}

                    title2={content.title2}
                    description2={content.description2}

                    title3={content.title3}
                    description3={content.description3}

                    title4={content.title4}
                    description4={content.description4}
                />
            ))}
        </ul>
    );
}

export default WorkExpItem;