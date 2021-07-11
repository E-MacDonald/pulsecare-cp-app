import styles from './Layout.module.css';
import MainNavigation from './MainNavigation';

//Provides an overall layout for the site, such as the backdrop and all encompasing children
function Layout(props) {
  return (
    <div className={styles.backdrop}>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}

export default Layout;