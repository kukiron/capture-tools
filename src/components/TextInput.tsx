type Props = {
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onRemove?: () => void;
};

function TextInput({
  value = '',
  placeholder = 'Type something here',
  onChange,
  onRemove,
}: Props) {
  return (
    <div className="rounded-md border border-dotted border-base-300 bg-base-200 p-1.5 [&:not(:last-of-type)]:mb-1.5">
      <div className="flex flex-row items-center gap-1.5">
        <input
          type="text"
          placeholder={placeholder}
          className="input w-full focus:outline-offset-0"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {onRemove && (
          <button
            className="btn btn-circle btn-ghost btn-sm"
            onClick={onRemove}
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

export default TextInput;
