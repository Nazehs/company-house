import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { ResultCards } from "../../components/ResultCard";

describe("Company cards test", () => {
  const mockCompanies = [
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
  ];

  beforeEach(async () => {
    const fetchCompanies = jest.fn().mockResolvedValue(mockCompanies);
    console.log(fetchCompanies);
    render(<ResultCards fetchCompanies={fetchCompanies} />);
    await waitFor(() => expect(fetchCompanies).toHaveBeenCalled());
  });

  test("renders company list", async () => {
    const { getByText } = screen;

    mockCompanies.forEach(({ title, company_number }) => {
      expect(getByText(title)).toBeDefined();
      expect(getByText(company_number)).toBeDefined();
    });
  });
});
