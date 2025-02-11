import Filters from "../components/Filters";
import SearchResults from "../components/SearchResults";

function SearchPage() {
  return (
    <div className="flex w-full">
      <div className="w-1/4 p-4 border-2 border-[var(--border-color)]">
        <Filters />
      </div>
      <div className="w-3/4 p-4 border-2 border-[var(--border-color)]">
        <SearchResults />
      </div>
    </div>
  );
}

export default SearchPage;
