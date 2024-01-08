import { useEffect, useMemo, useState } from "react";
import { fetchData } from "../services/Requests";
import CompanyCard from "./CompanyCard";
import PaginationComponent from "./PaginationComponent";
let PageSize = 5;

export const ResultCards = ({
  fetchCompanies,
  searched,
  isError,
  handlePagination,
}) => {
  const [companies, setCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [totalSize, setTotalSize] = useState(0);

  const currentTableData = useMemo(() => {
    // const firstPageIndex = (currentPage - 1) * pageSize;
    // const lastPageIndex = firstPageIndex + pageSize;
    return companies;
  }, [currentPage, companies]);

  useEffect(() => {
    async function fetchData() {
      // You can await here to get the returned values
      const results = await fetchCompanies();
      if (results) {
        const { items, items_per_page, total_results, page_number } = results;

        console.log({ items, items_per_page, total_results, page_number });
        // set the current page from the data
        setCurrentPage(page_number);
        // set the page size from the response
        setPageSize(items_per_page);
        // set the response data
        setCompanies(items);
        // set the total counts of the search match
        setTotalSize(total_results);
      }
    }
    fetchData();
  }, [fetchCompanies]);

  // return this if an error occured
  if (isError) {
    return <h3>Oops! an error occurred!... Try again later</h3>;
  }

  if (companies.length < 1 && searched) {
    return (
      <div className="row">
        <h3 className="text-center">Oops No Search Results... Try again</h3>
      </div>
    );
  }

  return (
    <div className="row">
      <h3>Search Results</h3>
      {currentTableData.map((company, index) => (
        <CompanyCard card={company} key={index} />
      ))}
      <div className="container">
        <div className="row mt-2 justify-content-end">
          <div className="col-md-6 text-end pt-5">
            <PaginationComponent
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={totalSize}
              pageSize={pageSize}
              onPageChange={(page) => {
                setCurrentPage(page);
                handlePagination(page);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const CompaniesResultsContainer = ({
  searchText,
  start_index = 0,
  handlePagination,
}) => {
  // fetch the company searched text
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);

  const fetchCompanies = async () => {
    try {
      // call the company house endpoint with the searched data
      const { items, items_per_page, total_results, page_number } =
        await fetchData(
          `search/companies?q=${searchText}&start_index=${start_index}&items_per_page=15`
        );
      console.log(items);
      // set the search variable to true
      setSearched(true);
      return { items, items_per_page, total_results, page_number };
    } catch (error) {
      // set the search variable to false
      setSearched(false);
      setError(error.message);
      return;
    }
  };

  return (
    <ResultCards
      searched={searched}
      isError={error}
      handlePagination={handlePagination}
      fetchCompanies={fetchCompanies}
    />
  );
};

export default CompaniesResultsContainer;
