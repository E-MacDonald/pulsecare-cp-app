import WorkExpItem from '../components/Body_WorkExp/WorkExpItem';
import Banner_exp from '../Images/banner_exp.jpg';

//Work Exp page containing Work experience details
function WorkExpPage() {
    return (
        <section>
            <WorkExpItem content={BODY_MAIN_DATA} />
        </section>
    );
}

export default WorkExpPage;


const BODY_MAIN_DATA = [
    {
        id: 'skills_comp',
        image: Banner_exp,

        title: '(2019 - 2020) Full Stack Software Developer - The Lava Group NI',
        description: `● Utilisation of a suite of software and languages such as: C#, MongoDB, MQTT Messaging,
      Node-Red, BSON & JSON, Linux Server, and GitHub.
      ● Developed in-house utility software for updating databases and utilised networking.
      ● Experienced key concepts and tools such as the MVP design structure and NuGet packages such
      as AutoFac, Dapper and Serilog. 
      ● Evaluated project requirements and specifications and developed the front and back end of a GPS
      tracking interface. 
      ● Planned and developed interfaces using Krypton suites theme designer that simplified overall
      management and offered ease-of-use.
      ● Partnered with a company mentor to learn best practices in software design.
      ● Collaborated effectively with members of the software development team and personnel in other
      departments.`,

        title2: '(2017 - 2019) Bartender - The Thirsty Goat:',
        description2: `● Bar maintenance, serving customers, and providing streamlined training for newly hired staff.
      ● Collaborated work in both floor staff and bar staff positions, dealing with a vast variety of customers.
      ● Evaluative teamwork and communication skills used to analyse and create solutions in incredibly
      demanding and hectic situations.`,

        title3: '(2015) Store Clerk - MS Computers:',
        description3: `● Repaired and diagnosed electrical devices.
      ● Conducted analysis to quickly and efficiently discover problems and mend items.
      ● Maintained communication between other work members and customers to a highest degree.`,

    },
]