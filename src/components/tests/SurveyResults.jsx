import React, { useState } from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { useNavigate } from "react-router-dom";

const SurveyResults = () => {
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const navigate =useNavigate();
  const [formData, setFormData] = useState({
    ageRange: "",
    gender: "",
    transgender: false,
    raceEthnicity: "",
    householdIncome: "",
    country: "",
    zipCode: "",
    populations: [],
    receivedTreatment: false,
    contributingFactors: [],
    hasInsurance: false,
    physicalHealthConditions: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // For checkboxes
    if (type === "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: checked
          ? [...prevFormData[name], value]
          : prevFormData[name].filter((item) => item !== value),
      }));
    }
    // For radio buttons
    else if (type === "radio") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
    // For other input types
    else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission logic here
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8 w-4/5">
      <p className="text-gray-700 font-semibold mb-6">
        Please take a moment to answer the following optional questions. Your
        answers are totally anonymous—we won't be able to identify you based on
        this information. Your answers help us provide better information and
        support for people like you. You can answer as many or as few questions
        as you would like. When you are done, scroll to the bottom of the survey
        and click "submit" to receive your screening results.
      </p>

      <h1 className="text-3xl lg:text-5xl font-semibold text-blue-800 mb-8">
        About You
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="w-full lg:w-4/6 flex flex-col gap-5">
          <label className="text-gray-700 text-xl">Age Range</label>
          <select
            type="text"
            name="ageRange"
            value={formData.ageRange}
            onChange={handleChange}
            className="bg-gray-100 border-2 rounded-2xl lg:w-4/6 p-3"
          >
            <option value="">Select...</option>
            <option value="18-24">18-24</option>
            <option value="25-34">25-34</option>
            <option value="35-44">35-44</option>
            <option value="45-54">45-54</option>
            <option value="55-64">55-64</option>
            <option value="65+">65+</option>
          </select>
        </div>
        <div className="w-full lg:w-4/6 flex flex-col gap-5">
          <label className="text-gray-700">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="bg-gray-100 border-2 rounded-2xl lg:w-4/6 p-3"
          >
            <option value="">Select...</option>
            <option value="FEMALE">Female</option>
            <option value="MALE">Male</option>
          </select>
        </div>

        <div className="w-full lg:w-4/6 flex flex-col gap-5">
          <label className="text-gray-700">Race/Ethnicity</label>

          <select
            name="raceEthnicity"
            value={formData.raceEthnicity}
            onChange={handleChange}
            className="bg-gray-100 border-2 rounded-2xl lg:w-4/6 p-3"
          >
            <option value="">Select...</option>
            <option value="WHITE">White</option>
            <option value="BLACK">Black</option>
            <option value="HISPANIC">Hispanic</option>
            <option value="ASIAN">Asian</option>
            <option value="NATIVE">Native</option>
            <option value="OTHER">Other</option>
          </select>
        </div>
        <div className="w-full lg:w-4/6 flex flex-col gap-5">
          <label className="text-gray-700">Household Income</label>
          <select
            type="text"
            name="householdIncome"
            value={formData.householdIncome}
            onChange={handleChange}
            className="bg-gray-100 border-2 rounded-2xl lg:w-4/6 p-3"
          >
            <option value="">Select...</option>
            <option value="LESS_THAN_25K">Less than $25,000</option>
            <option value="25K_50K">$25,000 - $50,000</option>
            <option value="50K_75K">$50,000 - $75,000</option>
            <option value="75K_100K">$75,000 - $100,000</option>
            <option value="100K_150K">$100,000 - $150,000</option>
            <option value="MORE_THAN_150K">More than $150,000</option>
          </select>
        </div>

        <div className="w-full lg:w-4/6 flex flex-col gap-5">
          <label className="text-gray-700">Select Country:</label>
          <input
            type="text"
            list="countries"
            name="selectedCountry"
            value={formData.selectedCountry}
            onChange={handleChange}
            className="bg-gray-100 border-2 rounded-2xl lg:w-4/6 p-3"
          />
          <datalist id="countries">
            {countries.map((country, index) => (
              <option key={index} value={country} />
            ))}
          </datalist>
        </div>
        <div className="w-full lg:w-4/6 flex flex-col gap-5">
          <label className="text-gray-700">Zip/Postal Code</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className="bg-gray-100 border-2 rounded-2xl lg:w-4/6 p-3"
          />
        </div>

        <label className="text-gray-700 mb-2">
          Which of the following populations describes you? Select all that
          apply.
        </label>
        <div className="flex flex-col gap-4">
          {[
            "Veteran or active-duty military",
            "Caregiver of someone living with emotional or physical illness",
            "LGBTQ+",
            "Student",
            "Trauma survivor",
            "New or expecting parent",
            "Healthcare worker",
          ].map((population, index) => (
            <label
              key={index}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                name="populations"
                value={population}
                checked={formData.populations.includes(population)}
                onChange={handleChange}
                className=" h-5 w-5 text-blue-600"
              />
              <span className="text-gray-700">{population}</span>
            </label>
          ))}
        </div>
        <div className="py-5">
          <label className="text-gray-700 mb-2">
            Have you ever received treatment/support for a mental health
            problem?
          </label>
          <div className="flex items-center gap-4 pt-2">
            <input
              type="radio"
              id="receivedTreatmentYes"
              name="receivedTreatment"
              value="YES"
              checked={formData.receivedTreatment === "YES"}
              onChange={handleChange}
              className="form-radio h-5 w-5 text-blue-600"
            />
            <label htmlFor="receivedTreatmentYes" className="text-gray-700">
              YES
            </label>
            <input
              type="radio"
              id="receivedTreatmentNo"
              name="receivedTreatment"
              value="NO"
              checked={formData.receivedTreatment === "NO"}
              onChange={handleChange}
              className="form-radio h-5 w-5 text-blue-600"
            />
            <label htmlFor="receivedTreatmentNo" className="text-gray-700">
              NO
            </label>
          </div>
        </div>

        <div>
          <label className="text-gray-700 mb-3">
            Think about your mental health test. What are the main things
            contributing to your mental health problems right now? Choose up to
            3.
          </label>
          <div className="flex flex-col gap-2">
            {[
              "Abuse or violence",
              "Relationship problems (friends, family, or significant other)",
              "Body image",
              "Low self-esteem or self-image",
              "School or work problems",
              "Financial problems",
              "Loneliness or isolation",
              "Grief or loss of someone or something",
              "Experiencing hate/bullying (including racism, homophobia, transphobia, or discrimination)",
              "State of the world (war, climate, politics)",
              "I don’t know (something just feels wrong)",
            ].map((factor, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="checkbox"
                  name="contributingFactors"
                  value={factor}
                  checked={formData.contributingFactors.includes(factor)}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">{factor}</span>
              </label>
            ))}
          </div>
        </div>

        {/* About Your Health */}
        <div>
          <label className="text-gray-700 mb-2">
            Do you currently have health insurance?
          </label>
          <div className="flex items-center gap-4">
            <input
              type="radio"
              id="hasInsuranceYes"
              name="hasInsurance"
              value="YES"
              checked={formData.hasInsurance === "YES"}
              onChange={handleChange}
              className="form-radio h-5 w-5 text-blue-600"
            />
            <label htmlFor="hasInsuranceYes" className="text-gray-700">
              YES
            </label>
            <input
              type="radio"
              id="hasInsuranceNo"
              name="hasInsurance"
              value="NO"
              checked={formData.hasInsurance === "NO"}
              onChange={handleChange}
              className="form-radio h-5 w-5 text-blue-600"
            />
            <label htmlFor="hasInsuranceNo" className="text-gray-700">
              NO
            </label>
          </div>
        </div>

        {/* Physical Health Conditions */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-2 block">
            Do you have any of the following physical health conditions? Select
            all that apply.
          </label>
          <div className="flex flex-col gap-2">
            {[
              "Heart disease",
              "Reproductive health concerns (PCOS, endometriosis, infertility, etc.)",
              "Diabetes",
              "Cancer",
              "Arthritis or other chronic pain",
              "Asthma, COPD or other lung conditions",
              "Movement Disorders (involuntary tics, tardive dyskinesia, etc.)",
              "Digestive problems (Crohn’s, colitis, IBS, etc.)",
              "Neurological conditions (epilepsy, etc.) or traumatic brain injury (TBI)",
              "Other...",
            ].map((condition, index) => (
              <label key={index} className="space-x-3 flex items-center">
                <input
                  type="checkbox"
                  name="physicalHealthConditions"
                  value={condition}
                  checked={formData.physicalHealthConditions.includes(
                    condition
                  )}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">{condition}</span>
              </label>
            ))}
          </div>
        </div>

        <PrimaryBtn text="Submit" />
      </form>
    </div>
  );
};

export default SurveyResults;
