import { Link } from 'react-router-dom';

import style from './MainNavigation.module.css';

function MainNavigation() {

    return <header className={style.header}>
        <div className={style.logo}>Curriculum Vitae</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'> Profile</Link>
                </li>

                <li>
                    <Link to='/Skills'> Skills Profile</Link>
                </li>

                <li>
                    <Link to='/WorkExp'> Work Experience</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation