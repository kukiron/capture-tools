type Props = {
  label: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
};

function ToggleSwitch({ label, value, onChange }: Props) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="opacity-60">{label}</div>
      <div>
        <input
          type="checkbox"
          className="toggle toggle-primary"
          checked={value}
          onChange={(e) => onChange?.(e.target.checked)}
        />
      </div>
    </div>
  );
}

export default ToggleSwitch;
