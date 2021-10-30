import { ReactComponent as SearchIcon } from "../assets/images/search-icon.svg";
const SearchComponent = ({ handleSearch }) => {
  return (
    <form onSubmit={handleSearch}>
      <div className="d-flex py-1 bg-white search-container">
        {/* search icon */}
        <div className="px-2 search-icon">
          <SearchIcon />
        </div>
        {/* search input text */}
        <input
          className="px-1 search-text"
          type="text"
          placeholder="Search for a company here"
        />
      </div>
    </form>
  );
};

export default SearchComponent;
