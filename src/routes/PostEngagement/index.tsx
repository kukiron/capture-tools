import chunk from 'lodash/chunk';
import keys from 'lodash/keys';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import { MOCK_DATA } from 'data/mock';
import { useAppDispatch, useDebounce } from 'hooks';
import { fetchPostEngagementData } from 'data/api';
import { DEFAULT_ROUTE, DEFAULT_TOAST_MESSAGE } from 'lib/constatns';
import { showToast } from 'store/reducers/toast';
import {
  addPostEngagements,
  deletePostEngagements,
  selectPostEngagements,
} from 'store/reducers/postEngagements';
import type { PostEngagement } from 'store/types';
import { Pagination, TableSkeleton } from 'components';
import PageHeader from './PageHeader';

import Instagram from 'assets/images/platform/instagram.png';
import Messenger from 'assets/images/platform/messenger.png';
import { filter, map } from 'lodash';

const ACCOUNT_MENU = ['Edit', 'Rename', 'Delete'];

function PostEngagements() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { data: storedItems, itemsPerPage } = useSelector(
    selectPostEngagements
  );

  const inputRef = useRef<HTMLInputElement>(null);

  // state containing post engagement items for table view
  const [tableItems, setTableItems] = useState<PostEngagement[]>(storedItems);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleFetchData = useCallback(async () => {
    if (storedItems.length) return;

    setLoading(true);
    const { success, message, result } = await fetchPostEngagementData();

    if (!success || !result) {
      dispatch(showToast({ message, type: 'error' }));
      return;
    }

    dispatch(addPostEngagements(result));
    setTableItems(result);
    setLoading(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearchItems = useDebounce((text: string) => {
    if (!text) {
      setTableItems(storedItems);
      return;
    }

    setTableItems(
      storedItems.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  });

  const handleSelectItem = useCallback(
    (itemId: number) => {
      const newList = tableItems.map((item) => ({
        ...item,
        selected: item.id === itemId ? !item.selected : item.selected,
      }));

      setTableItems(newList);

      if (!inputRef.current) return;

      const selectedCount = newList.filter((item) => item.selected).length;

      // update header checkbox state when clicking item checkbox in the table
      // triggeres change before state update
      switch (true) {
        case newList.length === 0: {
          inputRef.current.indeterminate = false;
          break;
        }

        case selectedCount > 0 && selectedCount < storedItems.length: {
          inputRef.current.indeterminate = true;
          break;
        }

        case selectedCount === storedItems.length: {
          inputRef.current.indeterminate = false;
          inputRef.current.checked = true;
          break;
        }

        default:
          break;
      }
    },
    [tableItems, storedItems.length]
  );

  const handleUpdateHeaderCheckbox = useCallback(() => {
    if (!inputRef.current) return;

    const selectedCount = tableItems.filter((item) => item.selected).length;

    // update header checkbox state when clicking on that
    // triggeres change after state update
    switch (true) {
      case selectedCount === 0:
      case selectedCount > 0 && selectedCount < storedItems.length: {
        inputRef.current.checked = true;
        setTableItems((prevItems) =>
          prevItems.map((item) => ({ ...item, selected: true }))
        );
        break;
      }

      case selectedCount === storedItems.length: {
        inputRef.current.checked = false;
        setTableItems((prevItems) =>
          prevItems.map((item) => ({ ...item, selected: false }))
        );
        break;
      }

      default:
        break;
    }
  }, [tableItems, storedItems.length]);

  const handleClickActionItem = (id: number, item: string) => {
    if (item === 'Edit') {
      navigate(`${DEFAULT_ROUTE}/${id}/edit`);
      return;
    }
    dispatch(showToast({ message: DEFAULT_TOAST_MESSAGE }));
  };

  const handleBatchDelete = useCallback(() => {
    dispatch(
      deletePostEngagements(map(filter(tableItems, { selected: true }), 'id'))
    );
    setTableItems((prevItems) => prevItems.filter((item) => !item.selected));

    // update header checkbox state
    if (inputRef.current) {
      inputRef.current.indeterminate = false;
      inputRef.current.checked = false;
    }
  }, [tableItems]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    handleFetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // update table content when search query changes
  useEffect(() => {
    handleSearchItems(searchQuery);
  }, [searchQuery]); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
    return <TableSkeleton />;
  }

  // formatted items shown in the current page
  const currentPageItems = (
    tableItems.length > itemsPerPage
      ? chunk(tableItems, itemsPerPage)[currentPage - 1]
      : tableItems
  ).map(({ name, unique, engaged, ...rest }) => ({
    name,
    'engaged/unique': `${engaged}/${unique}`,
    ...rest,
  }));

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
          deleteItems={handleBatchDelete}
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
                      onChange={handleUpdateHeaderCheckbox}
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
                        onChange={() => handleSelectItem(row.id)}
                        checked={Boolean(row.selected)}
                      />
                    </div>
                  </td>

                  {/* Platform image column */}
                  <td className="w-10">
                    <img
                      className="h-4 w-4"
                      alt={row.platform}
                      src={
                        row.platform.toLowerCase() === 'instagram'
                          ? Instagram
                          : Messenger
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
                        Actions
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
          currentPage={tableItems.length > itemsPerPage ? currentPage : 1}
          totalPages={Math.ceil(tableItems.length / itemsPerPage)}
          updateCurrentPage={(page: number) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default PostEngagements;
