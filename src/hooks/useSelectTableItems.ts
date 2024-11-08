import { useCallback, useRef, useState } from 'react';
import useAppDispatch from './useAppDispatch';
import { UnknownAction } from '@reduxjs/toolkit';

// Common item type for the table
type Item = {
  id: number;
};

// hook contains logic to select/deselect items in the table
// since this is a common feature in all capture tools sections
function useSelectTableItems(originalItems: Item[]) {
  const dispatch = useAppDispatch();

  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickItemCheckbox = useCallback(
    (itemId: number) => {
      if (!inputRef.current) return;

      const newList = selectedIds.includes(itemId)
        ? selectedIds.filter((id) => id !== itemId)
        : [...selectedIds, itemId];
      const selectedCount = newList.length;

      setSelectedIds(newList);

      // update header checkbox state when clicking item checkbox in the table
      // triggeres change before state update
      switch (true) {
        case newList.length === 0: {
          inputRef.current.indeterminate = false;
          break;
        }

        case selectedCount > 0 && selectedCount < originalItems.length: {
          inputRef.current.indeterminate = true;
          break;
        }

        case selectedCount === originalItems.length: {
          inputRef.current.indeterminate = false;
          inputRef.current.checked = true;
          break;
        }

        default:
          break;
      }
    },
    [selectedIds, originalItems.length]
  );

  const handleClickHeaderCheckbox = useCallback(() => {
    if (!inputRef.current) return;

    const selectedCount = selectedIds.length;

    // update header checkbox state when clicking on that
    // triggeres change after state update
    switch (true) {
      case selectedCount === 0:
      case selectedCount > 0 && selectedCount < originalItems.length: {
        inputRef.current.checked = true;
        // all items are selected
        setSelectedIds(originalItems.map(({ id }) => id));
        break;
      }

      case selectedCount === originalItems.length: {
        inputRef.current.checked = false;
        // all items are de-selected
        setSelectedIds([]);
        break;
      }

      default:
        break;
    }
  }, [selectedIds, originalItems]);

  const handleBatchDelete = useCallback(
    (action: (ids: number[]) => UnknownAction) => {
      dispatch(action(selectedIds));
      setSelectedIds([]);

      // update header checkbox state
      if (inputRef.current) {
        inputRef.current.indeterminate = false;
        inputRef.current.checked = false;
      }
    },
    [selectedIds, dispatch]
  );

  return {
    inputRef,
    selectedIds,
    // setSelectedIds,
    onClickItem: handleClickItemCheckbox,
    onClickHeader: handleClickHeaderCheckbox,
    onBatchDelete: handleBatchDelete,
  };
}

export default useSelectTableItems;
