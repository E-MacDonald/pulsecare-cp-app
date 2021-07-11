import SkillsItem from '../components/Body_Skills/SkillsItem';
import Banner_skills from '../Images/banner_skills.jpg';

//Skills page containing the likes of computing, teamwork, problem aolsivng and understanding
function SkillsPage() {
    return (
        <section>
            <SkillsItem content={BODY_MAIN_DATA} />
        </section>
    );
}

export default SkillsPage;

// Same as Profile.js
const BODY_MAIN_DATA = [
    {
        id: 'skills_comp',
        title: 'Computing:',
        image: Banner_skills,
        description: `Strong, continually developing understanding of Python and C#. Experience in other computing languages
      such as C++ and JavaScript. Knowledge of machine learning algorithms such as Source Vector Machine,
      k-Nearest Neighbour, and Random Forest, developed as part of a final year project application capable of
      classification covid-19 CT scans. Project development involved usage of additional libraries such as
      PySimpleGUI, OpenCV and Scikit-learn.
      Familiar with the player-stage environment, android studio and neural networks through university modules
      and coursework assignments. Android studio experience involved usage of SQLite, Firebase and APIs.
      Competent with the use of Visual Studio along with learning and adapting to unfamiliar computing
      languages. Previous experience working with MongoDB, MQTT and Node-Red development.`,

        title2: 'Leadership & Teamwork:',
        description2: `Thorough ability to take charge. Effectively and easily develop a strong cohesion with other team members.
      Ensure the inclusion of team members and maintain an understanding of their abilities and limitations
      allowing for appropriate application of workload. Dedication to the team to ensure they succeed bringing
      forth refined, and exceptional work.`,

        title3: 'Problem Solving:',
        description3: `Eagerness for deciphering a wide array of challenging logical based problems through many environments.
      Able to overcome challenges through an intelligent approach ensuring decisive and analytical reasoning to
      achieve satisfactory outcomes.`,

        title4: 'Communication & Understanding:',
        description4: `Able to adapt to situations involving both clients and team members. Strive to bring forth a motivating,
      encouraging and rewarding environment. Understanding of the difficulties that come when faced with new
      challenges and aim to help others see ways of overcoming problems.`,

    },

]