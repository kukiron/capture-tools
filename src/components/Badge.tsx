import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  icon?: ReactNode;
  remove: () => void;
};

function Badge({ children, icon, remove }: Props) {
  return (
    <div className="badge-outine badge mr-1 border-sky-500 bg-sky-100 px-2.5 py-3 text-sky-800">
      {icon && <span className="mr-1">{icon}</span>}
      {children}
      <span
        className="ml-1 cursor-pointer text-xs hover:font-bold hover:text-error"
        onClick={remove}
      >
        ✕
      </span>
    </div>
  );
}

export default Badge;
