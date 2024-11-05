import { useState } from 'react';

const tabs = ['Select A Post', 'Post ID / URL'] as const;
type Tab = (typeof tabs)[number];

function SelectSection() {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);
  return (
    <div className="basis-3/5">
      <div
        role="tablist"
        className="tabs-boxed tabs tabs-lg h-12 rounded-b-none border-b border-b-base-300 bg-base-100 p-0 *:!rounded-none"
      >
        {tabs.map((tab) => (
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
      <div className="flex place-content-center">
        {activeTab === 'Select A Post' ? (
          <>
            <br />
            Select A Post
          </>
        ) : (
          <div className="join mt-10">
            <input
              placeholder="Post ID / URL"
              className="input join-item input-bordered w-96 focus:outline-offset-0"
              defaultValue=""
            />
            <button className="btn btn-primary join-item">Grab Post</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectSection;
