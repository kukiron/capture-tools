import includes from 'lodash/includes';
import keys from 'lodash/keys';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useSelectTableItems } from 'hooks';
import { fetchPostEngagementData } from 'data/api';
import {
  DEFAULT_ROUTE,
  DEFAULT_TOAST_MESSAGE,
  INSTAGRAM_IMAGE_URL,
  MESSENGER_IMAGE_URL,
} from 'lib/constatns';
import { showToast } from 'store/reducers/toast';
import {
  addPostEngagements,
  deletePostEngagements,
  selectPostEngagements,
} from 'store/reducers/postEngagements';
import {
  getCurrentPageItems,
  searchPostEngagements,
} from 'store/selectors/postEngagements';
import { EmptyPage, Pagination, TableSkeleton } from 'components';
import PageHeader from './PageHeader';

import EmptyListImg from 'assets/images/empty-list.png';

const ACCOUNT_MENU = ['Edit', 'Rename', 'Delete'];

function PostEngagements() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const {
    data: storedItems,
    pageSize,
    totalPages,
  } = useSelector(selectPostEngagements);
  // items available in the table after searching
  const tableItems = useSelector(searchPostEngagements(searchQuery));
  // items availabe in current page
  const currentPageItems = useSelector(
    getCurrentPageItems(currentPage, searchQuery)
  );

  const { inputRef, selectedIds, onClickItem, onClickHeader, onBatchDelete } =
    useSelectTableItems(storedItems);

  const handleFetchData = useCallback(async () => {
    // do NOT fetch data if items already exist
    if (storedItems.length) return;

    setLoading(true);
    const { success, message, result } = await fetchPostEngagementData();

    if (!success || !result) {
      dispatch(showToast({ message, type: 'error' }));
      return;
    }

    dispatch(addPostEngagements(result));
    setLoading(false);
  }, [storedItems.length, dispatch]);

  const handleClickActionItem = (id: number, item: string) => {
    if (item === 'Edit') {
      navigate(`${DEFAULT_ROUTE}/${id}/edit`);
      return;
    }
    dispatch(showToast({ message: DEFAULT_TOAST_MESSAGE }));
  };

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  if (loading) {
    return <TableSkeleton />;
  }

  // render empty page
  if (!storedItems.length && !totalPages) {
    return (
      <EmptyPage
        title="Post Engagement"
        description="Empty list. No data available."
        imageUrl={EmptyListImg}
      />
    );
  }

  // prepare table headers
  const tableHeaders = keys(currentPageItems[0]).filter(
    (text) => !['id', 'platform', 'selected'].includes(text)
  );

  return (
    <div className="lg:col-span-7">
      <div className="px-6">
        <PageHeader
          query={searchQuery}
          updateQuery={(value: string) => setSearchQuery(value)}
          deleteItems={() => onBatchDelete(deletePostEngagements)}
        />

        <div className="overflow-y-hidden overflow-x-scroll">
          <table className="table table-sm bg-base-100 px-6">
            {/* ----- Table header row ----- */}
            <thead>
              <tr>
                {/* Checkbox column */}
                <th>
                  <div className="px-1">
                    <input
                      type="checkbox"
                      ref={inputRef}
                      className="checkbox checkbox-sm"
                      onChange={onClickHeader}
                    />
                  </div>
                </th>

                {/* Data items columns - one empty for platform image */}
                <th></th>
                {tableHeaders.map((header) => (
                  <th key={header}>
                    <div className="px-1 capitalize">{header}</div>
                  </th>
                ))}

                {/* Actions column */}
                <th>
                  <div className="px-1">Actions</div>
                </th>
              </tr>
            </thead>

            {/* ----- Table body ----- */}
            <tbody>
              {currentPageItems.map((row, index) => (
                <tr key={index}>
                  {/* Checkbox column */}
                  <td className="w-5">
                    <div className="px-1">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        onChange={() => onClickItem(row.id)}
                        checked={includes(selectedIds, row.id)}
                      />
                    </div>
                  </td>

                  {/* Platform image column */}
                  <td className="w-10 flex-shrink-0">
                    <img
                      className="h-3.5 w-3.5"
                      alt={row.platform}
                      src={
                        row.platform.toLowerCase() === 'instagram'
                          ? INSTAGRAM_IMAGE_URL
                          : MESSENGER_IMAGE_URL
                      }
                    />
                  </td>

                  {/* Data columns from the mock data */}
                  {tableHeaders.map((header) => (
                    <td key={header} className="w-40">
                      <div className="px-1">
                        {row[header as keyof (typeof currentPageItems)[0]]}
                      </div>
                    </td>
                  ))}

                  {/* Actions dropdown column */}
                  <td className="w-5">
                    <div
                      role="listbox"
                      className={`dropdown ${index >= currentPageItems.length - 2 ? 'dropdown-top' : 'dropdown-bottom'} dropdown-end`}
                    >
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-outline btn-xs"
                      >
                        Action
                      </div>
                      <ul
                        tabIndex={0}
                        className="menu dropdown-content menu-xs z-[1] rounded-box bg-base-100 p-2 shadow"
                      >
                        {ACCOUNT_MENU.map((menu) => (
                          <li
                            role="menuitem"
                            key={menu}
                            onClick={() => handleClickActionItem(row.id, menu)}
                          >
                            <a>{menu}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          empty={tableItems.length === 0}
          currentPage={tableItems.length > pageSize ? currentPage : 1}
          totalPages={Math.ceil(tableItems.length / pageSize)}
          updateCurrentPage={(page: number) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default PostEngagements;
