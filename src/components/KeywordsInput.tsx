import uniq from 'lodash/uniq';
import { useState } from 'react';

import { useAppDispatch } from 'hooks';
import { showToast } from 'store/reducers/toast';
import { Badge } from 'components';

function KeywordsInput({ label }: { label: string }) {
  const dispatch = useAppDispatch();

  const [input, setInput] = useState('');
  const [keywords, setKeywords] = useState<string[]>([]);

  const handleAddKeyword = () => {
    setKeywords(uniq([...keywords, input.trim()])); // remove duplicates
    setInput(''); // clear input after adding keyword

    if (keywords.includes(input.trim())) {
      dispatch(
        showToast({ message: 'Keyword already exists!', type: 'warning' })
      );
    }
  };

  const handleRemoveKeyword = (keyword: string) => {
    setKeywords((prev) => prev.filter((text) => text !== keyword));
  };

  return (
    <div className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <div className="mb-2.5">
        {keywords.map((keyword) => (
          <Badge key={keyword} remove={() => handleRemoveKeyword(keyword)}>
            {keyword}
          </Badge>
        ))}
      </div>

      <div className="join">
        <input
          placeholder="Specify Keywords"
          className="input join-item input-bordered w-full focus:outline-offset-0"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAddKeyword()}
        />
        <button
          className="btn btn-primary join-item"
          onClick={handleAddKeyword}
        >
          Add Keyword
        </button>
      </div>
    </div>
  );
}

export default KeywordsInput;
