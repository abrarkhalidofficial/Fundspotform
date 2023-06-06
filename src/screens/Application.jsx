import { Checkbox } from "../components/Checkbox";
import { Input } from "../components/Input";
import { Link } from "react-router-dom";
import { Radio } from "../components/Radio";
import { Select } from "../components/Select";
import { Textarea } from "../components/Textarea";
import { useState } from "react";

export default function Application() {
  const [steps, setSteps] = useState(0);

  const [form, setForm] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log(form);

  return (
    <div className="container">
      <Link className="container__logo" to="/">
        <img
          src="https://res.cloudinary.com/dhg7c7ypc/image/upload/v1685972600/fund/vactor_carlfn.png"
          alt="logo"
        />
      </Link>
      <div className="container__progress">
        <div
          className="container__progress__bar"
          style={{ width: `${(steps / 5) * 100}%` }}
        />
      </div>
      <div className="container__form">
        {steps === 0 ? (
          <>
            <Input
              value={form.name}
              name="loanAmount"
              label="Loan Amount"
              required={true}
              placeholder={"Enter loan amount"}
              info="Minimum loan amount is $300"
              error={"This is a required field"}
              onChange={handleChange}
            />
            <Select
              label={"Loan Purpose"}
              required={true}
              info={"Please select one of the following"}
              options={[
                "Business Cashflow",
                "Setup / Expand Business",
                "Renew Business Licence",
                "Purchase Business Inventory / Equipment",
                "Commercial Property Related",
                "Other Business Use",
              ]}
              value={form.sdfsdf}
              name="sdfsdf"
              onChange={handleChange}
            />{" "}
            <Textarea
              info={"Please describe your use for the funds.         "}
              label={"Business Loan Details         "}
              error={"This is a required field             "}
              required={true}
              value={form.nsdfasdfame}
              name="nsdfasdfame"
              onChange={handleChange}
            />
            <Checkbox
              label={"Preferred Loan Product"}
              required={true}
              info={"Please select from the following (more than one is ok):"}
              options={[
                "Unsecured Business Funding",
                "Bad Credit Business Funding",
                "Start Up Business Funding",
                "2nd Mortgage Business Funding",
                "Caveat Business Funding",
                "No Preference",
              ]}
              value={form.namasdfasdfe}
              name="namasdfasdfe"
              onChange={handleChange}
            />
          </>
        ) : steps === 1 ? (
          <>
            <Select
              label={"Business Stage"}
              required={true}
              options={[
                "Planning to Start",
                "Purchase Existing Business / Franchise",
                "Trading Under 12 Months",
                "Trading Over 12 Months",
              ]}
              value={form.sdfsdf}
              name="sdfsdf"
              onChange={handleChange}
            />{" "}
            <Select
              label={"Your Industry"}
              required={true}
              info={"Select one from the list             "}
              options={[
                "Construction, Civil & Trades",
                "Retail, Wholesales & Sales",
                "Transport & Logistic",
                "Hospitality & Tourism",
                "Professional Services - accounting, legal, HR, IT",
                "Real Estate & Property",
                "Design & Media – advertising, marketing agency, architecture",
                "Financial Services & Insurance - brokers",
                "Hair & Beauty",
                "Healthcare & Medical ",
                "Entertainment & Recreation – fitness, performing art, music",
                "Manufacturing",
                "Education, Training & Consultation",
                "Primary Industry - farming & animals",
                "Other",
              ]}
              value={form.sdfsdf}
              name="sdfsdf"
              onChange={handleChange}
            />
            <Radio
              label="Do you have a ABN or ACN?"
              error={"This is a required field"}
              required={true}
              value={form.detaisdfdsafls}
              name="detaisdfdsafls"
              onChange={handleChange}
              options={["ABN", "ACN"]}
            />
          </>
        ) : steps === 2 ? (
          <>
            <Input
              value={form.name}
              name="Who are your Target Customers / Clients? "
              label={"Who are your Target Customers / Clients?"}
              required={true}
              placeholder={"e.g. Cafe and Restaurant owners"}
              error={"This is a required field             "}
              onChange={handleChange}
            />
            <Input
              value={form.name}
              name="Your Product and Services "
              label={"Your Product and Services"}
              required={true}
              placeholder={
                "Please outline the product / services your business will be providing"
              }
              error={"This is a required field             "}
              onChange={handleChange}
            />
            <Checkbox
              label={"Business Plan and Experience"}
              required={true}
              info={"Please select all that apply"}
              options={[
                "Detailed Business Plan Available",
                "I have experience in the industry",
                "I have already sought legal/accounting advice",
                "I have a business consultant",
                "I have operated a business before",
                "I have the relevant permit/certificates/licences needed to operate the business",
                "I have suppliers/customers ready to trade",
                "I am aware of the financial risk of operating a business",
              ]}
              value={form.namasdfasdfe}
              name="Business Plan and Experience"
              onChange={handleChange}
            />
            <Input
              value={form.name}
              name="Expected Annual Turnover  "
              label={"Expected Annual Turnover "}
              required={true}
              placeholder={"Expected Annual Turnover $"}
              error={"This is a required field             "}
              onChange={handleChange}
            />
            <Checkbox
              label={"Current Income Source "}
              required={true}
              info={"Please select all that apply"}
              options={[
                "No Income",
                "Full Time PAYG",
                "Casual or Contractor",
                "Centrelink",
                "Other",
              ]}
              value={form.namasdfasdfe}
              name="Current Income Source "
              onChange={handleChange}
            />
          </>
        ) : steps === 3 ? (
          <>
            <Select
              label={"Preferred Loan Term"}
              required={true}
              options={["3 Months", "6 Months", "12 Months", "18 Months"]}
              value={form.sdfsdf}
              name="Preferred Loan Term"
              onChange={handleChange}
            />
            <Radio
              label="Preferred Repayment Frequency"
              error={"This is a required field"}
              required={true}
              value={form.preferredRepaymentFrequency}
              name="preferredRepaymentFrequency"
              onChange={handleChange}
              options={["Monthly", "Fortnightly", "Weekly"]}
            />
            <Input
              value={form.name}
              name="preferredRepayment"
              label={`Preferred ${form.preferredRepaymentFrequency} Repayment`}
              required={true}
              placeholder="Min $100"
              error={"This is a required field"}
              onChange={handleChange}
            />
            <Select
              label="Preferred Loan Term"
              required={true}
              options={[
                "Principal and Interest",
                "Interest Only",
                "Flexible Payment",
                "Capitalisation",
              ]}
              value={form.sdfsdf}
              name="preferredLoanTerm"
              onChange={handleChange}
            />
            <Checkbox
              label={"How will you be repaying your loan? "}
              required={true}
              options={[
                "Business Income",
                "Refinance",
                "Sale of Asset",
                "Employment Income",
              ]}
              value={form.namasdfasdfe}
              name="How will you be repaying your loan? "
              onChange={handleChange}
            />
          </>
        ) : steps === 4 ? (
          <>
            {" "}
            <Select
              label={"Number of Motor Vehicles"}
              required={true}
              options={["0", "1", "2", "3", "4", "5", "6"]}
              value={form.sdfsdf}
              name="Number of Motor Vehicles"
              onChange={handleChange}
            />
            <Select
              label={"Number of Real Estate Properties "}
              required={true}
              options={["0", "1", "2", "3", "4", "5", "6"]}
              value={form.sdfsdf}
              name="Number of Real Estate Properties "
              onChange={handleChange}
            />
            <Select
              label={"Number of Equipment / Vessel "}
              required={true}
              options={["0", "1", "2", "3", "4", "5", "6"]}
              value={form.sdfsdf}
              name="Number of Equipment / Vessel"
              onChange={handleChange}
            />
          </>
        ) : steps === 5 ? (
          <>
            <Select
              label={"Title "}
              required={true}
              options={["Mr", "Mrs", "Ms", "Miss", "Dr"]}
              value={form.sdfsdf}
              name="Title"
              onChange={handleChange}
            />
            <Input
              value={form.name}
              name="First Name "
              label={"First Name "}
              required={true}
              error={"This is a required field"}
              onChange={handleChange}
            />
            <Input
              value={form.name}
              name="Middle Name
              "
              label={"Middle Name             "}
              error={"This is a required field"}
              onChange={handleChange}
            />
            <Input
              value={form.name}
              name="Last Name "
              required={true}
              label={"Last Name "}
              error={"This is a required field"}
              onChange={handleChange}
            />
            <Input
              value={form.name}
              name="Date of Birth "
              required={true}
              label={"Date of Birth "}
              error={"This is a required field"}
              onChange={handleChange}
            />
            <Input
              value={form.name}
              name="Mobile Number  "
              required={true}
              label={"Date of Birth "}
              error={"This is a required field"}
              onChange={handleChange}
            />
            <Input
              value={form.name}
              name="Mobile Number  "
              required={true}
              label={"Mobile Number  "}
              error={"This is a required field"}
              onChange={handleChange}
            />
            <Input
              value={form.name}
              name="Email  "
              required={true}
              label={"Email  "}
              error={"This is a required field"}
              onChange={handleChange}
            />{" "}
            <Select
              label={"Residency Status "}
              required={true}
              options={["Australian ", "Permanent Resident", "Other"]}
              value={form.sdfsdf}
              name="Residency Status"
              onChange={handleChange}
            />
            <Input
              value={form.name}
              name="Street   "
              required={true}
              label={"Street   "}
              error={"This is a required field"}
              onChange={handleChange}
            />{" "}
            <Select
              label={"State  "}
              required={true}
              options={[
                "-- Select State --",
                "New South Wales",
                "Victoria",
                "Queensland",
                "South Australia",
                "Western Australia",
                "Tasmania",
                "Northern Territory",
              ]}
              value={form.sdfsdf}
              name="State "
              onChange={handleChange}
            />
            <Input
              value={form.name}
              name="Postcode    "
              required={true}
              label={"Postcode   "}
              error={"This is a required field"}
              onChange={handleChange}
            />{" "}
            <Select
              label={"Credit History  "}
              required={true}
              options={[
                "clean - No defaults ",
                "Minor - Defaults",
                "Serious - Defaults",
                "Discharged Bankrupt or Ix Debt Agreement",
                "Under Bankruptcy or Ix Debt Agreement",
              ]}
              value={form.sdfsdf}
              name="Credit History "
              onChange={handleChange}
            />
          </>
        ) : null}
        <button
          onClick={() => setSteps(steps + 1)}
          className="container__content__button"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
