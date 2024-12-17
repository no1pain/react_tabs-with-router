import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Link,
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useParams,
} from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { NotFoundPage } from './components/NotFoundPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const location = useLocation();
  const tabId = useParams();

  return (
    <div>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item is-active">
              Home
            </Link>
            <Link to="/tabs" className="navbar-item">
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tabs" element={<TabsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          {location.pathname === '/tabs' && (
            <>
              <div className="tabs is-boxed">
                <ul>
                  <li data-cy="Tab" className="is-active">
                    <a href="#/">Tab 1</a>
                  </li>
                  <li data-cy="Tab">
                    <a href="#/">Tab 2</a>
                  </li>
                  <li data-cy="Tab">
                    <a href="#/">Tab 3</a>
                  </li>
                </ul>
              </div>
              <div className="block" data-cy="TabContent">
                Please select a tab
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
