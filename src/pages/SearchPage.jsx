import Filters from "../components/Filters";
import SearchResults from "../components/SearchResults";

function SearchPage() {
  return (
    <div className="flex flex-col w-full justify-center md:flex-row">
      <div className="w-full p-4 min-w-[350px] md:w-1/4 ">
        <Filters />
      </div>
      <div className=" w-3/4 p-1 m-auto sm:p-4 flex-wrap">
        <SearchResults />
      </div>
    </div>
  );
}

export default SearchPage;
