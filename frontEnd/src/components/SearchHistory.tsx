import useManageMedianNumbers from "../hooks/useManageMedianNumbers";

export default function SearchHistory() {
  const { state, removeHistory } = useManageMedianNumbers();
  const handleRemoveHistory = (id: string) => {
    removeHistory(id);
  };
  return (
    <div className="flex-1 p-4 max-w-2xl bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Search history</h3>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm font-medium text-gray-300 dark:text-white-300">Upper limit</span>
        <span className="text-sm font-medium text-gray-300 dark:text-white-300">Median Prime numbers</span>
      </div>
      {state.history.length !== 0 ? (
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {state.history.map((history) => (
              <li key={history.id} className="py-3 sm:py-4 history-item">
                <div className="flex items-center space-x-4">
                  <div className="text-xl inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {history.upperLimitNumber}
                  </div>
                  <div className="flex-1 min-w-0 justify-end flex">
                    <p className="text-5sm font-medium text-gray-900 truncate dark:text-white flex items-center">
                      {history.medianPrimeNumbers.length === 0 ? (
                        "No median prime numbers found"
                      ) : (
                        <span>{history.medianPrimeNumbers.join(", ")}</span>
                      )}
                      <span
                        data-testid={history.upperLimitNumber}
                        onClick={() => handleRemoveHistory(history.id)}
                        className="cursor-pointer ml-2 text-5sm font-medium text-gray-900 truncate dark:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 items-center text-red-500 mx-auto"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
