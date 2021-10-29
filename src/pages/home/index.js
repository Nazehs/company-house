import { ReactComponent as SearchIcon } from "../../assets/images/search-icon.svg";
import CompaniesResultsContainer from "../../components/ResultCard";

const HomePage = () => {
  // this will handle the search text the user provided
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      {/* page header */}
      <header className="app-header py-5">
        <h1 className="text-center ">Company House</h1>
      </header>
      <div className="container">
        {/* search container */}
        <div className="row mt-5 align-items-center justify-content-center">
          <div className="col-md-8 mt-5">
            {/* search form */}
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
          </div>
          {/* search results */}
          <div className="row gy-3  mb-5 gx-5">
            {<CompaniesResultsContainer />}
          </div>
        </div>
      </div>
      <footer className="text-center mt-5 fixed-bottom">
        <div className="container py-3">All Right Reserve &copy; 2021</div>
      </footer>
    </div>
  );
};

export default HomePage;
