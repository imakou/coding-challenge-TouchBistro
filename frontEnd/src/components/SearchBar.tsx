import React, { useState } from "react";
import useManageMedianNumbers from "../hooks/useManageMedianNumbers";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const { getNewMedianNumbers, setError } = useManageMedianNumbers();

  const handleGetNewMedianNumbers = (input: string) => {
    if (isNaN(Number(input))) {
      setError("Invalid input. Please enter a number.");
      return;
    }
    getNewMedianNumbers(input);
    setError("");
  };

  function handleOnKeyDown(key: string) {
    if (key === "Enter") {
      handleGetNewMedianNumbers(inputValue);
    }
  }

  return (
    <div className="mb-5">
      <button className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</button>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          role="searchInput"
          onKeyDown={(e) => handleOnKeyDown(e.key)}
          onChange={(e) => setInputValue(e.target.value)}
          type="search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type a upper limit number"
        />
        <button
          role="searchButton"
          onClick={() => handleGetNewMedianNumbers(inputValue)}
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </div>
  );
}
