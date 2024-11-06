import { useState } from 'react';
import { useAppDispatch } from 'hooks';

import { DEFAULT_TOAST_MESSAGE } from 'lib/constatns';
import { showToast } from 'store/reducers/toast';

const TABS = ['Select A Post', 'Post ID / URL'] as const;
type Tab = (typeof TABS)[number];

function SelectSection() {
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  const [input, setInput] = useState('');

  return (
    <div className="basis-3/5">
      <div
        role="tablist"
        className="tabs-boxed tabs tabs-lg h-12 rounded-b-none border-b border-b-base-300 bg-base-100 p-0 *:!rounded-none"
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
              // defaultValue=""
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="btn btn-primary join-item"
              onClick={() =>
                Boolean(input.trim()) &&
                dispatch(showToast({ message: DEFAULT_TOAST_MESSAGE }))
              }
            >
              Grab Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectSection;
