import React, { useState } from 'react';
import '../../../assets/css/earn.css';

const ToptabMenu = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
            <div className={`underline ${activeTab === tab.id ? 'active' : ''}`}></div>
          </div>
        ))}
      </div>
      <div className="tabs-content">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default ToptabMenu;