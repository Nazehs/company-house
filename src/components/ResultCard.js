import { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";

export const ResultCards = ({ fetchCompanies }) => {
  const [companys, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies().then(setCompanies);
  }, [fetchCompanies]);
  console.log(companys);
  return (
    <div className="row">
      {companys.map((company, index) => (
        <CompanyCard card={company} key={index} />
      ))}
    </div>
  );
};
const CompaniesResultsContainer = (searchText) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "8e57da80-5770-4e31-a1ef-3c7b400f5e9c");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const fetchCompanies = async () => {
    try {
      const data = await fetch(
        "https://api.company-information.service.gov.uk/search/companies?q=aviva plc",
        requestOptions
      );
      // .then((response) => response.json())
      // .then((result) => console.log(result))
      // .catch((error) => console.log("error", error));
      return data.json() || [];
    } catch (error) {
      console.log(error);
      return [];
    }

    //   return data;
  };

  return <ResultCards fetchCompanies={fetchCompanies} />;
};

export default CompaniesResultsContainer;
