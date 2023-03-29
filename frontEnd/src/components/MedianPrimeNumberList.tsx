import ErrorNotification from "./ErrorNotification";
import SearchBar from "./SearchBar";
import SearchHistory from "./SearchHistory";

const MedianPrimeNumberList = () => {
  return (
    <div className="pt-5 max-w-2xl mx-auto justify-center flex flex-col">
      <SearchBar />
      <ErrorNotification />
      <SearchHistory />
    </div>
  );
};

export default MedianPrimeNumberList;
