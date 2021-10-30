import { useEffect, useState } from "react";
import { useParams } from "react-router";
import DirectorsCard from "../../components/DirectorsCard";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import { fetchData } from "../../services/Requests";

const CompanyDetailsComponent = () => {
  const { company_number } = useParams();
  const [company, setCompany] = useState({});
  const [directors, setDirectors] = useState([]);

  const getData = async () => {
    const companyData = fetchData(`company/${company_number}`);

    const directorsData = fetchData(`company/${company_number}/officers`);

    // get the request parallely for both company details and officers
    const allData = await Promise.all([companyData, directorsData]);
    //   set company data
    setCompany(allData[0]);
    // set directors data
    setDirectors(allData[1].items);
  };

  useEffect(() => {
    getData();
    // change the doc title to company name
    document.title = `${company.company_name}`;
  }, []);
  return (
    <div className="row position-relative">
      <Header />
      <div className="container mb-5">
        <div className="col-md-8 mx-auto pt-5">
          <div className="col-md-12 mb-3">
            <div className="bg-white result-card p-3 mb-5">
              <div className="company-name">
                <span> Company Name</span>
                <p>{company?.company_name}</p>
              </div>
              <div className="company-reg_no">
                <span> Registration Numbers</span>
                <p>{company?.company_number}</p>
              </div>
              <div className="company-reg_no">
                <span> Registered Address</span>
                <p>
                  {company?.registered_office_address?.postal_code}{" "}
                  {company?.registered_office_address?.locality}{" "}
                  {company?.registered_office_address?.address_line_1}{" "}
                  {company?.registered_office_address?.region}{" "}
                </p>
              </div>
              <div className="company-reg_no">
                <span> Company Directors</span>
                {directors.map((director, index) => (
                  <DirectorsCard director={director} key={index} />
                ))}
              </div>
              <div className="company-reg_no">
                <span> Group Structure</span>
                <p>NA </p>
              </div>
              <div className="company-reg_no">
                <span> Incorporation</span>
                <p>{company?.date_of_creation} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CompanyDetailsComponent;
