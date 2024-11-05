type Props = {
  label: string;
  value: string;
  options: string[];
  listTitle?: boolean;
  onSelect: (value: string) => void;
};

function Select({ label, value, options, listTitle = false, onSelect }: Props) {
  return (
    <div className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>

      <div className="form-control">
        <select
          spellCheck="true"
          autoComplete="on"
          className="select select-bordered"
          value={value}
          onChange={(e) => onSelect(e.target.value)}
        >
          {listTitle && (
            <option value="" disabled>
              Select
            </option>
          )}
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Select;
