import { Link } from 'react-router-dom';

import { useAppDispatch } from 'hooks';
import { DEFAULT_ROUTE, DEFAULT_TOAST_MESSAGE } from 'lib/constatns';
import { showToast } from 'store/reducers/toast';

function Breadcrumbs() {
  const dispatch = useAppDispatch();

  return (
    <div className="-mt-5 mb-2 flex items-center justify-between px-8">
      <div
        role="navigation"
        aria-label="Breadcrumbs"
        className="breadcrumbs text-lg"
      >
        <ul>
          {['Capture Tools', 'Post Engagement'].map((text) => (
            <li key={text}>
              <Link to={DEFAULT_ROUTE}>{text}</Link>
            </li>
          ))}
          <li role="link">Edit</li>
        </ul>
      </div>
      <div>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            dispatch(showToast({ message: DEFAULT_TOAST_MESSAGE }));
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Breadcrumbs;
