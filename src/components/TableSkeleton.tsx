function TableSkeleton() {
  return (
    <div className="lg:col-span-7">
      <div className="px-6">
        <div className="mb-2 grow truncate">
          <h4 className="truncate text-xl">Post Engagements</h4>
        </div>

        <table className="table table-md bg-base-100 px-6">
          {/* ----- Table header row ----- */}
          <thead>
            <tr>
              {Array.from({ length: 4 }).map((_, index) => (
                <th key={index}>
                  <div className="skeleton h-3 w-20 px-1 py-2"></div>
                </th>
              ))}
            </tr>
          </thead>

          {/* ----- Table body ----- */}
          <tbody>
            {Array.from({ length: 6 }).map((_, index) => (
              <tr key={index}>
                <td className="w-8">
                  <div className="skeleton h-3 w-8 px-1 py-2"></div>
                </td>
                <td className="w-12">
                  <div className="skeleton h-3 w-12 px-1 py-2"></div>
                </td>
                <td className="w-40">
                  <div className="skeleton h-3 w-40 px-1 py-2"></div>
                </td>
                <td className="w-5">
                  <div className="skeleton h-3 w-10 px-1 py-2"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableSkeleton;
