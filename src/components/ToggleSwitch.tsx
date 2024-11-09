import { useState } from 'react';

type Props = {
  label: string;
};

function ToggleSwitch({ label }: Props) {
  const [value, setValue] = useState(false);
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="opacity-60">{label}</div>
      <div>
        <input
          type="checkbox"
          className="toggle toggle-primary"
          checked={value}
          onChange={(e) => setValue(e.target.checked)}
        />
      </div>
    </div>
  );
}

export default ToggleSwitch;
