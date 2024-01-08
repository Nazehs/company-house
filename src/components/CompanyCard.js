import { Link } from "react-router-dom";
const CompanyCard = ({ card }) => {
  return (
    <div className="col-md-3 mb-3">
      <div className="bg-white result-card p-3">
        <div className="company-name">
          <span> Company Name</span>
          <p>{card.title}</p>
        </div>
        <div className="company-reg_no">
          <span> Registration Numbers</span>
          <p>{card.company_number} </p>
        </div>
        <div className="button-container pt-3 text-center">
          <Link to={`/company-details/${card.company_number}`}>
            <button className="button">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
