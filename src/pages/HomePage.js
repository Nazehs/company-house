import { ReactComponent as SearchIcon } from "../assets/images/search-icon.svg";
import ResultCard from "../components/ResultCard";
const results = [
  {
    company_number: "02468686",
    address: {
      locality: "London",
      postal_code: "EC3P 3DQ",
      address_line_1: "1 Undershaft",
      premises: "St Helen's",
    },
    company_status: "active",
    address_snippet: "St Helen's, 1 Undershaft, London, EC3P 3DQ",
    company_type: "plc",
    description_identifier: ["incorporated-on"],
    date_of_creation: "1990-02-09",
    title: "AVIVA PLC",
    snippet: "",
    description: "02468686 - Incorporated on  9 February 1990",
    kind: "searchresults#company",
    links: {
      self: "/company/02468686",
    },
    matches: {
      snippet: [],
      title: [1, 5],
    },
  },
  {
    description_identifier: ["dissolved-on"],
    title: "AVIVA DOMAINS LIMITED",
    date_of_creation: "2000-11-03",
    date_of_cessation: "2015-02-03",
    snippet: "AVIVA ",
    description: "04101873 - Dissolved on  3 February 2015",
    kind: "searchresults#company",
    links: {
      self: "/company/04101873",
    },
    matches: {
      snippet: [1, 5],
      title: [1, 5],
    },
    company_number: "04101873",
    address: {
      premises: "St Helen'S",
      region: "England",
      address_line_1: "1 Undershaft",
      postal_code: "EC3P 3DQ",
      locality: "London",
    },
    company_status: "dissolved",
    company_type: "ltd",
    address_snippet: "St Helen'S, 1 Undershaft, London, England, EC3P 3DQ",
  },
  {
    date_of_creation: "1995-07-10",
    description_identifier: ["dissolved-on"],
    snippet: "AVIVA ",
    date_of_cessation: "2013-10-15",
    title: "SAGES & WISE WOMEN LIMITED",
    matches: {
      snippet: [1, 5],
    },
    description: "03077840 - Dissolved on 15 October 2013",
    kind: "searchresults#company",
    links: {
      self: "/company/03077840",
    },
    address: {
      locality: "Bradford On Avon",
      postal_code: "BA15 2LE",
      address_line_1: "120 Winsley",
      region: "Wiltshire",
      premises: "Royston Cottage",
    },
    company_status: "dissolved",
    company_number: "03077840",
    address_snippet:
      "Royston Cottage, 120 Winsley, Bradford On Avon, Wiltshire, BA15 2LE",
    company_type: "ltd",
  },
  {
    kind: "searchresults#company",
    description: "12737852 - Incorporated on 13 July 2020",
    links: {
      self: "/company/12737852",
    },
    matches: {
      snippet: [1, 5],
    },
    description_identifier: ["incorporated-on"],
    date_of_creation: "2020-07-13",
    snippet: "AVIVA PROPERTY MANAGEMENTS ",
    title: "AVIIVA PROPERTY MANAGEMENT LIMITED",
    company_type: "ltd",
    address_snippet:
      "16 Near Lands Close, Quinton, Birmingham, West Midlands, United Kingdom, B32 1RS",
    company_number: "12737852",
    address: {
      locality: "Birmingham",
      address_line_1: "Near Lands Close",
      postal_code: "B32 1RS",
      region: "West Midlands",
      premises: "16",
      country: "United Kingdom",
      address_line_2: "Quinton",
    },
    company_status: "active",
  },
  {
    company_type: "ltd",
    address_snippet: "Aviva, Wellington Row, York, United Kingdom, YO90 1WR",
    address: {
      locality: "York",
      postal_code: "YO90 1WR",
      address_line_1: "Wellington Row",
      country: "United Kingdom",
      premises: "Aviva",
    },
    company_status: "active",
    company_number: "03424940",
    matches: {
      snippet: [],
      title: [1, 5],
    },
    description: "03424940 - Incorporated on 26 August 1997",
    kind: "searchresults#company",
    links: {
      self: "/company/03424940",
    },
    snippet: "",
    description_identifier: ["incorporated-on"],
    date_of_creation: "1997-08-26",
    title: "AVIVA ADMINISTRATION LIMITED",
  },
  {
    address_snippet: "618a Hitchin Road Hitchin Road, Luton, England, LU2 7UG",
    company_type: "ltd",
    company_number: "12350543",
    address: {
      address_line_1: "Hitchin Road Hitchin Road",
      postal_code: "LU2 7UG",
      locality: "Luton",
      premises: "618a",
      country: "England",
    },
    company_status: "active",
    kind: "searchresults#company",
    description: "12350543 - Incorporated on  5 December 2019",
    links: {
      self: "/company/12350543",
    },
    matches: {
      title: [1, 5],
      snippet: [],
    },
    description_identifier: ["incorporated-on"],
    date_of_creation: "2019-12-05",
    snippet: "",
    title: "AVIVA BEAUTY ACADEMY LTD",
  },
  {
    company_type: "ltd",
    address_snippet: "St  Helen's, 1 Undershaft, London, EC3P 3DQ",
    company_number: "02346461",
    address: {
      premises: "St  Helen's",
      locality: "London",
      postal_code: "EC3P 3DQ",
      address_line_1: "1 Undershaft",
    },
    company_status: "active",
    description: "02346461 - Incorporated on 13 February 1989",
    kind: "searchresults#company",
    links: {
      self: "/company/02346461",
    },
    matches: {
      title: [1, 5],
      snippet: [],
    },
    snippet: "",
    description_identifier: ["incorporated-on"],
    date_of_creation: "1989-02-13",
    title: "AVIVA BRANDS LIMITED",
  },
  {
    company_type: "ltd",
    address_snippet: "8 Surrey Street, Norwich, NR1 3NG",
    company_number: "03259447",
    address: {
      premises: "8",
      locality: "Norwich",
      postal_code: "NR1 3NG",
      address_line_1: "Surrey Street",
    },
    company_status: "active",
    description: "03259447 - Incorporated on  7 October 1996",
    kind: "searchresults#company",
    links: {
      self: "/company/03259447",
    },
    matches: {
      snippet: [],
      title: [1, 5],
    },
    description_identifier: ["incorporated-on"],
    snippet: "",
    date_of_creation: "1996-10-07",
    title: "AVIVA CENTRAL SERVICES UK LIMITED",
  },
  {
    description_identifier: ["incorporated-on"],
    snippet: "AVIVA NOMINEES UK ",
    date_of_creation: "2003-02-12",
    title: "AVIVA CLIENT NOMINEES UK LIMITED",
    links: {
      self: "/company/04664263",
    },
    description: "04664263 - Incorporated on 12 February 2003",
    kind: "searchresults#company",
    matches: {
      snippet: [1, 5],
      title: [1, 5],
    },
    company_number: "04664263",
    company_status: "active",
    address: {
      country: "England",
      premises: "Aviva",
      region: "North Yorkshire",
      address_line_1: "Wellington Row",
      postal_code: "YO90 1WR",
      locality: "York",
    },
    address_snippet:
      "Aviva, Wellington Row, York, North Yorkshire, England, YO90 1WR",
    company_type: "ltd",
  },
  {
    date_of_creation: "2020-09-10",
    description_identifier: ["incorporated-on"],
    snippet: "",
    title: "AVIVA CLIENTS LTD",
    links: {
      self: "/company/SC673849",
    },
    kind: "searchresults#company",
    description: "SC673849 - Incorporated on 10 September 2020",
    matches: {
      snippet: [],
      title: [1, 5],
    },
    company_number: "SC673849",
    company_status: "active",
    address: {
      premises: "1/2",
      country: "United Kingdom",
      address_line_1: ", 231 Langside Road",
      postal_code: "G42 8XY",
      locality: "Glasgow",
    },
    address_snippet: "1/2, 231 Langside Road, Glasgow, United Kingdom, G42 8XY",
    company_type: "ltd",
  },
  {
    address_snippet:
      "St Helen's, 1 Undershaft, London, United Kingdom, EC3P 3DQ",
    company_type: "ltd",
    company_status: "active",
    address: {
      country: "United Kingdom",
      premises: "St Helen's",
      locality: "London",
      postal_code: "EC3P 3DQ",
      address_line_1: "1 Undershaft",
    },
    company_number: "02559391",
    matches: {
      snippet: [],
      title: [1, 5],
    },
    links: {
      self: "/company/02559391",
    },
    description: "02559391 - Incorporated on 16 November 1990",
    kind: "searchresults#company",
    description_identifier: ["incorporated-on"],
    snippet: "",
    date_of_creation: "1990-11-16",
    title: "AVIVA COMMERCIAL FINANCE LIMITED",
  },
  {
    description: "02084205 - Incorporated on 15 December 1986",
    kind: "searchresults#company",
    links: {
      self: "/company/02084205",
    },
    matches: {
      snippet: [],
      title: [1, 5],
    },
    description_identifier: ["incorporated-on"],
    title: "AVIVA COMPANY SECRETARIAL SERVICES LIMITED",
    date_of_creation: "1986-12-15",
    snippet: "",
    address_snippet: "St Helen's, 1 Undershaft, London, EC3P 3DQ",
    company_type: "ltd",
    company_number: "02084205",
    address: {
      premises: "St Helen's",
      address_line_1: "1 Undershaft",
      postal_code: "EC3P 3DQ",
      locality: "London",
    },
    company_status: "active",
  },
  {
    matches: {
      snippet: [],
      title: [1, 5],
    },
    description: "02725830 - Incorporated on 24 June 1992 - Liquidation",
    kind: "searchresults#company",
    links: {
      self: "/company/02725830",
    },
    snippet: "",
    description_identifier: ["incorporated-on", "liquidation"],
    date_of_creation: "1992-06-24",
    title: "AVIVA CONSUMER PRODUCTS UK LIMITED",
    address_snippet: "30 Finsbury Square, London, EC2A 1AG",
    company_type: "ltd",
    address: {
      postal_code: "EC2A 1AG",
      address_line_1: "Finsbury Square",
      locality: "London",
      premises: "30",
    },
    company_status: "liquidation",
    company_number: "02725830",
  },
  {
    description_identifier: ["dissolved-on"],
    date_of_creation: "2019-04-23",
    title: "AVIVA COUNSELLING LTD",
    date_of_cessation: "2021-01-26",
    snippet: "",
    description: "11958844 - Dissolved on 26 January 2021",
    kind: "searchresults#company",
    links: {
      self: "/company/11958844",
    },
    matches: {
      snippet: [],
      title: [1, 5],
    },
    company_number: "11958844",
    address: {
      address_line_2: "Flat 3",
      postal_code: "NW6 3HT",
      address_line_1: "Goldhurst Terrace",
      locality: "London",
      country: "United Kingdom",
      premises: "74",
    },
    company_status: "dissolved",
    company_type: "ltd",
    address_snippet:
      "74 Goldhurst Terrace, Flat 3, London, United Kingdom, NW6 3HT",
  },
  {
    matches: {
      snippet: [],
      title: [1, 5],
    },
    kind: "searchresults#company",
    description: "00184857 - Incorporated on  7 October 1922",
    links: {
      self: "/company/00184857",
    },
    description_identifier: ["incorporated-on"],
    date_of_creation: "1922-10-07",
    title: "AVIVA CREDIT SERVICES UK LIMITED",
    snippet: "",
    address_snippet: "St Helen's, 1 Undershaft, London, EC3P 3DQ",
    company_type: "ltd",
    address: {
      address_line_1: "1 Undershaft",
      postal_code: "EC3P 3DQ",
      locality: "London",
      premises: "St Helen's",
    },
    company_status: "active",
    company_number: "00184857",
  },
  {
    company_type: "ltd",
    address_snippet: "11 George Street West, Luton, Bedfordshire, LU1 2BJ",
    company_status: "active",
    address: {
      address_line_1: "George Street West",
      postal_code: "LU1 2BJ",
      locality: "Luton",
      premises: "11",
      region: "Bedfordshire",
    },
    company_number: "08285498",
    matches: {
      title: [1, 5],
      snippet: [],
    },
    links: {
      self: "/company/08285498",
    },
    kind: "searchresults#company",
    description: "08285498 - Incorporated on  8 November 2012",
    date_of_creation: "2012-11-08",
    description_identifier: ["incorporated-on"],
    snippet: "",
    title: "AVIVA DAY SPA LIMITED",
  },
  {
    company_type: "ltd",
    address_snippet:
      "Figurit Niddry Lodge, 51 Holland Street, Kensington, London, United Kingdom, W8 7JB",
    company_number: "06555297",
    address: {
      region: "London",
      country: "United Kingdom",
      premises: "Figurit Niddry Lodge",
      locality: "Kensington",
      address_line_1: "51 Holland Street",
      postal_code: "W8 7JB",
    },
    company_status: "active",
    description: "06555297 - Incorporated on  4 April 2008",
    kind: "searchresults#company",
    links: {
      self: "/company/06555297",
    },
    matches: {
      snippet: [],
      title: [1, 5],
    },
    description_identifier: ["incorporated-on"],
    date_of_creation: "2008-04-04",
    snippet: "",
    title: "AVIVA DENTISTRY LIMITED",
  },
  {
    address: {
      country: "United Kingdom",
      premises: "71-75",
      postal_code: "WC2H 9JQ",
      address_line_1: "Shelton Street",
      locality: "London",
      address_line_2: "Covent Garden",
    },
    company_status: "active",
    company_number: "13568980",
    company_type: "ltd",
    address_snippet:
      "71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ",
    description_identifier: ["incorporated-on"],
    date_of_creation: "2021-08-16",
    title: "AVIVA DIGITAL GROUP LIMITED",
    snippet: "",
    matches: {
      snippet: [],
      title: [1, 5],
    },
    description: "13568980 - Incorporated on 16 August 2021",
    kind: "searchresults#company",
    links: {
      self: "/company/13568980",
    },
  },
  {
    description: "03280551 - Incorporated on 19 November 1996",
    kind: "searchresults#company",
    links: {
      self: "/company/03280551",
    },
    matches: {
      title: [1, 5],
      snippet: [],
    },
    date_of_creation: "1996-11-19",
    description_identifier: ["incorporated-on"],
    title: "AVIVA EMPLOYMENT SERVICES LIMITED",
    snippet: "",
    address_snippet: "St  Helen's, 1 Undershaft, London, EC3P 3DQ",
    company_type: "ltd",
    company_number: "03280551",
    address: {
      postal_code: "EC3P 3DQ",
      address_line_1: "1 Undershaft",
      locality: "London",
      premises: "St  Helen's",
    },
    company_status: "active",
  },
  {
    address_snippet:
      "Aviva, Wellington Row, York, North Yorkshire, England, YO90 1WR",
    company_type: "ltd",
    company_number: "03286484",
    address: {
      region: "North Yorkshire",
      premises: "Aviva",
      country: "England",
      locality: "York",
      address_line_1: "Wellington Row",
      postal_code: "YO90 1WR",
    },
    company_status: "active",
    description: "03286484 - Incorporated on  2 December 1996",
    kind: "searchresults#company",
    links: {
      self: "/company/03286484",
    },
    matches: {
      title: [1, 5],
      snippet: [],
    },
    description_identifier: ["incorporated-on"],
    date_of_creation: "1996-12-02",
    title: "AVIVA EQUITY RELEASE UK LIMITED",
    snippet: "",
  },
];
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
            <h3>Search Results</h3>
            {results.map((result, index) => (
              <ResultCard card={result} key={index} />
            ))}
          </div>
        </div>
      </div>
      <footer className="text-center mt-5">
        <div className="container py-3">All Right Reserve &copy; 2021</div>
      </footer>
    </div>
  );
};

export default HomePage;
