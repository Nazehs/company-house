import { useState } from "react";
import CompaniesResultsContainer from "../../components/ResultCard";
import SearchComponent from "../../components/SearchComponent";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";

const HomePage = () => {
  const [searchStatus, setSearchStatus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  // this will handle the search text the user provided
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchStatus(true);
    const text = e.target[0].value;
    setSearchQuery(text);
  };
  const handlePagination = (currentPage) => {
    console.log(currentPage);
    console.log(searchQuery);
    setSearchStatus(true);
    console.log((currentPage * 20) / 2 + (currentPage - 2) * 10);
    setStartIndex((currentPage * 20) / 2 + (currentPage - 2) * 10);
  };
  return (
    <div className="main position-relative">
      {/* page header */}
      <Header />
      <div className="">
        <div className="container main-content">
          {/* search container */}
          <div className="row mt-5 align-items-center justify-content-center">
            <div className="col-md-8 mt-5">
              {/* search form */}
              <SearchComponent handleSearch={handleSearch} />
            </div>
            {/* search results */}
            <div className="row gy-3  mb-5 gx-5">
              {searchStatus ? (
                <CompaniesResultsContainer
                  start_index={startIndex}
                  handlePagination={handlePagination}
                  searchText={searchQuery}
                />
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* footer section */}
      <Footer />
    </div>
  );
};

export default HomePage;
