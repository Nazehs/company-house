import { useLocalStore, useObserver } from "mobx-react-lite";
import React, { useEffect, useMemo, useState } from "react";
import { fetchData } from "../services/Requests";
import CompanyCard from "./CompanyCard";
import PaginationComponent from "./PaginationComponent";

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    company: [],

    // add new response to the store
    addCompanyResponse: (response) => {
      store.company.push(...response);
    },
    get getTotalCount() {
      return store.company.length;
    },
  }));
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

// const ComponentComponent = () => {
//   const store = React.useContext(StoreContext);

//   return (
//     <ul>
//       {store.company.map((name) => (
//         <li key={name}>name</li>
//       ))}
//     </ul>
//   );
// };

export const ResultCards = ({
  fetchCompanies,
  searched,
  isError,
  handlePagination,
}) => {
  // const [companies, setCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalSize, setTotalSize] = useState(0);
  const store = React.useContext(StoreContext);
  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return store.company.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize, store.company]);

  // console.log(currentData, store.company);
  useEffect(() => {
    async function fetchData() {
      // You can await here to get the returned values
      const results = await fetchCompanies();
      if (results) {
        const { items, items_per_page, total_results, page_number } = results;

        store.addCompanyResponse([...items]);
        // set the current page from the data
        setCurrentPage(page_number);
        // set the page size from the response
        setPageSize(items_per_page);

        // set the total counts of the search match
        setTotalSize(total_results);
      }
    }
    fetchData();
  }, [fetchCompanies, store]);

  // return this if an error occured
  // if (isError) {
  //   return <h3>Oops! an error occurred!... Try again later</h3>;
  // }

  // if (companies.length < 1 && searched) {
  //   return useObserver(() => {
  //     <div className="row">
  //       <h3 className="text-center">Oops No Search Results... Try again</h3>
  //     </div>;
  //   });
  // }

  return (
    <useObserver>
      <div className="row">
        <h3>Search Results</h3>
        {currentData.map((company) => (
          <CompanyCard card={company} key={company.company_number} />
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
    </useObserver>
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
          `search/companies?q=${searchText}&start_index=${start_index}&items_per_page=20`
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
    <StoreProvider>
      <ResultCards
        searched={searched}
        isError={error}
        handlePagination={handlePagination}
        fetchCompanies={fetchCompanies}
      />
    </StoreProvider>
  );
};

export default CompaniesResultsContainer;
