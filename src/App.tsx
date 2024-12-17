import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { NotFoundPage } from './components/NotFoundPage';

const NOT_SELECTED = 'Please select a tab';

export const App = () => {
  return (
    <div>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'navbar-item is-active' : 'navbar-item'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) =>
                isActive ? 'navbar-item is-active' : 'navbar-item'
              }
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tabs" element={<TabsPage />}>
              <Route index element={<div>{NOT_SELECTED}</div>} />{' '}
              <Route path=":tabId" element={<TabsPage />} />{' '}
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
