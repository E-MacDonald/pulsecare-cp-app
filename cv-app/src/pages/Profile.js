import ProfileItem from '../components/Profile/ProfileItem';
import MainItem from '../components/Body_Main/MainItem';

import ProfileImage from '../Images/profile_pic.png';
import BannerRed from '../Images/banner_purp.jpg';
import BannerName from '../Images/banner_name.jpg';

//Construct and set up the Profile page which covers contact and location inforamtion, 
//short profile intro and education
function ProfilePage() {
  return (
    <section>
      <ProfileItem content={PROFILE_DATA} />
      <MainItem content={BODY_MAIN_DATA} />
    </section>
  );
}

export default ProfilePage;

//For the meantime, the page data being passed in will be saved/passed as a Javascript object
//for simplicity to focus on ensuring data is obtainable, styled, and working correctly initally
const PROFILE_DATA = [
  {
    id: 'Prof_intro',
    image: ProfileImage,

    email_title: 'Email:',
    email: 'erinmacdonald98@gmail.com',

    linked_in_title: 'LinkedIn:',
    linked_in: 'linkedin.com/in/macdonald-e2',
    mobilenum_title: 'Mobile:',
    mobile_num: '+447852650521',

    address_title: 'Address:',
    address: '23 Sperrin View, Magherafelt, BT45 6DH',
  },
];

const BODY_MAIN_DATA = [
  {
    id: 'body_sum',
    title: 'Profile:',
    image: BannerName,
    description:
      `Dependable, analytical, and committed. Comfortable working under pressure and as a team player.
       Display a great level of initiative and adaptability when faced with any challenge. Strive for, and achieve, a high standard of results. 
       Love for logical based problems solving, especially within the computing and technological field.`
  },

  {
    id: 'body_Edu_Uni',
    title: 'Education and Qualifications',
    image: BannerRed,
    description:
      '(2017 - 2021) Ulster University, Magee Campus',
    add_description:
      'Bachelor of Science : Computer Science (First Class Honours) & Diploma : Professional Practice (Distinction)',

    title2: '',
    description2: '(2015 - 2017) Northern Regional College, Magherafelt',
    add_description2: 'BTEC Level 3 Extended Diploma : IT (Triple Distinction* - D*D*D*)',
  },


]