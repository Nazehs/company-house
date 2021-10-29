import { useEffect, useState } from "react";
import { fetchData } from "../services/Requests";
import CompanyCard from "./CompanyCard";

export const ResultCards = ({ fetchCompanies }) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies().then(setCompanies);
  }, [fetchCompanies]);
  return (
    <div className="row">
      <h3>Search Results</h3>
      {companies.map((company, index) => (
        <CompanyCard card={company} key={index} />
      ))}
    </div>
  );
};
const CompaniesResultsContainer = (searchText) => {
  // fetch the company searched text
  const fetchCompanies = async () => {
    try {
      // call the company house endpoint with the searched data
      const { items } = await fetchData("search/companies?q=aviva plc");

      return items || [];
    } catch (error) {
      console.error(error);
      return;
    }
  };

  return <ResultCards fetchCompanies={fetchCompanies} />;
};

export default CompaniesResultsContainer;
