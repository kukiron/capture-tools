import { Select } from 'components';
import { useState } from 'react';

const MESSAGE_TYPES = ['Flow', 'Single Message'];
const MESSAGE_FLOWS = ['Welcome Message', 'Default Reply'];
const SINGLE_MESSAGES = ['Text Card #1', 'Text Card #2'];

function PrivateMessages() {
  const [seletedITems, setSelectedItems] = useState<string[]>([
    MESSAGE_TYPES[0],
    '',
  ]);

  const handleUpdateSelectedItems = (index: number) => (value: string) => {
    // make a copy of the state
    const newItems = [...seletedITems];
    newItems[index] = value;

    // update the state without any further changes
    if (index !== 0) {
      setSelectedItems(newItems);
      return;
    }

    if (value === MESSAGE_TYPES[1]) {
      // add single message option if message type is single message
      newItems.push(SINGLE_MESSAGES[0]);
    } else {
      // remove single message option if message type is not single message
      newItems.splice(2, 1);
    }

    setSelectedItems(newItems);
  };

  return (
    <>
      <h1 className="sub-header">Private Reply After Post Engagement</h1>

      <Select
        label="Select message type"
        value={seletedITems[0]}
        onSelect={handleUpdateSelectedItems(0)}
        options={MESSAGE_TYPES}
      />

      <Select
        label="Select flow"
        value={seletedITems[1]}
        onSelect={handleUpdateSelectedItems(1)}
        options={MESSAGE_FLOWS}
        showTitle
      />

      {seletedITems.length === 3 && (
        <Select
          label="Select message flow"
          value={seletedITems[2]}
          onSelect={handleUpdateSelectedItems(2)}
          options={SINGLE_MESSAGES}
          showTitle
        />
      )}
    </>
  );
}

export default PrivateMessages;
