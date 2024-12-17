import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Link,
  Routes,
  Route,
  useParams,
  NavLink,
  useLocation,
} from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { NotFoundPage } from './components/NotFoundPage';
import { useEffect, useState } from 'react';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const NOT_SELECTED = 'Please select a tab';

export const App = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const location = useLocation();
  const [tabContent, setTabContent] = useState('Please select a tab');

  useEffect(() => {
    if (tabId) {
      const activeTab = tabs.find(tab => tab.id === tabId);
      if (activeTab) {
        setTabContent(activeTab.content);
      } else {
        setTabContent(NOT_SELECTED);
      }
    }
  }, [tabId]);

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
            <Route path="/tabs" element={<TabsPage />} />
            <Route path="/tabs/:tabId" element={<TabsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          {location.pathname.startsWith('/tabs') && (
            <>
              <div className="tabs is-boxed">
                <ul>
                  {tabs.map(tab => (
                    <li
                      key={tab.id}
                      className={tab.id === tabId ? 'is-active' : ''}
                    >
                      <Link to={`/tabs/${tab.id}`} data-cy="Tab">
                        {tab.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="block" data-cy="TabContent">
                {tabContent}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
