import { ChangeEvent, memo } from 'react';
import { useDispatch } from 'react-redux';

import { showToast } from 'store/reducers/toast';
import Icon from './Icon';

type Props = {
  empty: boolean;
  currentPage: number;
  totalPages: number;
  updateCurrentPage: (page: number) => void;
};

const BUTTON_CLASS_NAME = 'btn btn-circle btn-primary btn-sm';

function Pagination({
  empty,
  currentPage,
  totalPages,
  updateCurrentPage,
}: Props) {
  const dispatch = useDispatch();

  const handleUpdatePage = (event: ChangeEvent<HTMLInputElement>) => {
    const newPage = Number(event.target.value);

    // show a toaster message for pages beyond range
    if (newPage <= 0 || newPage > totalPages) {
      dispatch(showToast({ message: "Page doesn't exist.", type: 'error' }));
      return;
    }

    updateCurrentPage(newPage);
  };

  return (
    <div className="flex items-center justify-center gap-4 py-3.5">
      <button
        className={BUTTON_CLASS_NAME}
        disabled={empty || currentPage === 1}
        onClick={() => updateCurrentPage(1)}
      >
        <Icon name="fast-rewind" className="h-5 w-5" />
      </button>
      <button
        className={BUTTON_CLASS_NAME}
        disabled={empty || currentPage === 1}
        onClick={() => updateCurrentPage(currentPage - 1)}
      >
        <Icon name="arrow-left" className="h-5 w-5" />
      </button>
      <button
        className={BUTTON_CLASS_NAME}
        disabled={empty || currentPage === totalPages}
        onClick={() => updateCurrentPage(currentPage + 1)}
      >
        <Icon name="arrow-right" className="h-5 w-5" />
      </button>
      <button
        className={BUTTON_CLASS_NAME}
        disabled={empty || currentPage === totalPages}
        onClick={() => updateCurrentPage(totalPages)}
      >
        <Icon name="fast-forward" className="h-5 w-5" />
      </button>

      <span className="flex items-center gap-1">
        <div>Page</div>
        <strong>
          {currentPage} of {totalPages}
        </strong>
      </span>

      <span className="hidden items-center gap-1 md:flex">
        · Go to page:
        <input
          type="number"
          disabled={empty}
          // defaultValue={1}
          value={currentPage}
          onChange={handleUpdatePage}
          className="input input-sm input-bordered w-16 p-1 focus:outline-offset-0"
        />
      </span>
    </div>
  );
}

export default memo(Pagination);
