import { Icon } from 'components';

type Props = {
  query?: string;
  updateQuery: (query: string) => void;
  deleteItems: () => void;
};

// common header component used for capture-tools items
function Header({ query, updateQuery, deleteItems }: Props) {
  return (
    <div className="mb-2 flex flex-row items-end gap-2">
      {/* Page Title */}
      <div className="grow truncate">
        <h4 className="truncate text-xl">Post Engagements</h4>
      </div>

      {/* Search input */}
      <div className="form-control hidden md:flex">
        <div className="join items-center border border-neutral bg-base-100">
          <input
            placeholder="Search…"
            type="text"
            className="input input-sm join-item h-[30px] border-0 focus:outline-none"
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
          />
          <span className="join-item px-1">
            <Icon name="search" />
          </span>
        </div>
      </div>

      {/* Action dropdown */}
      <div role="listbox" className="dropdown dropdown-end">
        <label tabIndex={0}>
          <button className="btn btn-outline btn-sm">
            Bulk Actions <Icon name="dropdown" className="h-4 w-4" />
          </button>
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content menu-sm z-[1] mt-1 w-48 rounded-box bg-base-100 p-2 shadow"
          role="menu"
        >
          <li role="menuitem" onClick={deleteItems}>
            <a>Delete</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
