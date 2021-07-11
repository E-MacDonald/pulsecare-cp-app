//Profile item creation allowing for java object values to be assigned to values

import ProfileContainer from './ProfileContainer';
import classes from './ProfileItem.module.css';

//Maps values from passed in data
//Wrapped around profile container to provide styling 
function ProfileItem(props) {
  return (
    <ul className={classes.list}>
      {props.content.map((content) => (

        <ProfileContainer
          key={content.id}
          id={content.id}
          image={content.image}

          email_title={content.email_title}
          email={content.email}

          linked_in_title={content.linked_in_title}
          linked_in={content.linked_in}

          mobilenum_title={content.mobilenum_title}
          mobile_number={content.mobile_num}

          address_title={content.address_title}
          address={content.address}

        />
      ))}
    </ul>
  );
}

export default ProfileItem;

