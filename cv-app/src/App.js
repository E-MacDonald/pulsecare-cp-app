import ProfilePage from './pages/Profile';
import SkillsPage from './pages/Skills';
import WorkExpPage from './pages/WorkExp';

import Layout from './components/layout/Layout';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <ProfilePage />
        </Route>
        <Route path='/skills'>
          <SkillsPage />
        </Route>
        <Route path='/workExp'>
          <WorkExpPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;