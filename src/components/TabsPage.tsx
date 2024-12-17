import { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const NOT_SELECTED = 'Please select a tab';

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const [tabContent, setTabContent] = useState(NOT_SELECTED);

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
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li key={tab.id} className={tab.id === tabId ? 'is-active' : ''}>
              <Link to={`/tabs/${tab.id}`} data-cy="Tab">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Routes>
        <Route index element={<div>{NOT_SELECTED}</div>} />
        <Route path=":tabId" element={<div>{tabContent}</div>} />
      </Routes>
    </div>
  );
};
