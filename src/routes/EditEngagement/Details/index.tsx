import { useState } from 'react';
import Settings from './Settings';
import AutoResponse from './AutoResponse';

const TABS = ['Settings', 'Auto Response'] as const;

type Tab = (typeof TABS)[number];

function MainSection() {
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);

  return (
    <div className="basis-2/5">
      <div
        role="tablist"
        className="tabs tabs-bordered tabs-lg *:!border-b *:!text-sm"
      >
        {TABS.map((tab) => (
          <a
            key={tab}
            role="tab"
            className={`tab ${activeTab === tab ? 'tab-active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </a>
        ))}
      </div>

      <div className="h-[76vh] overflow-y-auto px-6 py-3.5 text-sm">
        {activeTab === 'Settings' ? <Settings /> : <AutoResponse />}
      </div>
    </div>
  );
}

export default MainSection;
