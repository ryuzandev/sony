import React, { useContext, useState } from "react";
import "../../componentsCss/BookNowModal.css";
import { AppContext } from "../../App";
import axios from "axios";

function BookNowForm({ onClose }) {
  const { setBook } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    comments: "",
    file1: null,
    file2: null,
    annualMaintenance: false,
    amcCondition: "",
    companyMake: "",
    customMake: "",
  });

  // Mapping services to relevant company makes
  const companyOptions = {
    "Television service": [
      "LG",
      "SAMSUNG",
      "PANASONIC",
      "VU TELEVISION",
      "SONY",
      "TCL",
      "REDMI",
      "REALME",
      "ONEPLUS",
      "XIAOMI",
      "BPL",
      "ONIDA",
      "MICROMAX",
      "VIDEOCON",
      "PHILIPS",
      "TOSHIBHA",
    ],
    "Washing Machine service": [
      "LG",
      "SAMSUNG",
      "PANASONIC",
      "BOSCH",
      "VOLTAS BEKO",
      "KELVINATOR",
      "IFB",
      "WHIRLPOOL",
      "HITACHI",
      "SIEMENS",
    ],
    "Microwave Oven service": [
      "LG",
      "SAMSUNG",
      "PANASONIC",
      "IFB",
      "WHIRLPOOL",
      "HITACHI",
      "MIDEA",
    ],
    "Refrigerator service": [
      "LG",
      "SAMSUNG",
      "PANASONIC",
      "WHIRLPOOL",
      "HITACHI",
      "BOSCH",
      "SIEMENS",
      "MIDEA",
    ],
    "Dishwasher service": ["BOSCH", "SIEMENS", "WHIRLPOOL", "IFB"],
    "AirConditioner service": [
      "LG",
      "SAMSUNG",
      "VOLTAS BEKO",
      "HITACHI",
      "DAIKIN",
      "MITSUBISHI",
      "CARRIER",
      "BLUESTAR",
    ],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      ...(name === "service" ? { companyMake: "" } : {}), // Reset companyMake when service changes
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [name]: file,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Data:", formData);
  //   setBook((prevBook) => [...prevBook, formData]);
  //   onClose();
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Debugging: Log file details
    console.log("file1:", formData.file1);
    if (formData.file1) {
      console.log("file1 name:", formData.file1.name);
      console.log("file1 type:", formData.file1.type);
      console.log("file1 size:", formData.file1.size);
    }

    console.log("file2:", formData.file2);
    if (formData.file2) {
      console.log("file2 name:", formData.file2.name);
      console.log("file2 type:", formData.file2.type);
      console.log("file2 size:", formData.file2.size);
    }

    // Debug entire formData object
    console.log("Full Form Data:", formData);

    // You can now also proceed with uploading using FormData and axios
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        payload.append(key, value);
      }
    });

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("API Error:", error);
    }

    setBook((prevBook) => [...prevBook, formData]);
    onClose();
  };

  return (
    <div className="booknow-modal-overlay">
      <div className="booknow-modal-content">
        <button className="booknow-close-button" onClick={onClose}>
          ×
        </button>
        <h2>Book Now</h2>
        <form className="booknow-form" onSubmit={handleSubmit}>
          <label>
            Name*:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Phone*:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Email (optional):
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Address*:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            ></textarea>
          </label>
          <label>
            Service*:
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a service</option>
              {Object.keys(companyOptions).map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>

          {/* Company Make Dropdown (Conditional Rendering) */}
          {formData.service && (
            <label>
              Company Make*:
              <select
                name="companyMake"
                value={formData.companyMake}
                onChange={handleInputChange}
                required
              >
                <option value="">Select company</option>
                {companyOptions[formData.service]?.map((company) => (
                  <option key={company} value={company}>
                    {company}
                  </option>
                ))}
                <option value="OTHERS">OTHERS</option>
              </select>
            </label>
          )}

          {/* Custom input if "OTHERS" is selected */}
          {formData.companyMake === "OTHERS" && (
            <label>
              Provide your product make:
              <input
                type="text"
                name="customMake"
                value={formData.customMake}
                onChange={handleInputChange}
              />
            </label>
          )}

          <label>
            Amc Status*:
            <select
              name="amcCondition"
              value={formData.amcCondition}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Status</option>
              <option value="Under Amc">Under Amc</option>
              <option value="Amc Expired">Amc Expired</option>
              <option value="Under Warranty">Under Warranty</option>
              <option value="Warranty Expired">Warranty Expired</option>
            </select>
          </label>

          <div className="booknow-checkbox-container">
            <input
              type="checkbox"
              name="annualMaintenance"
              checked={formData.annualMaintenance}
              onChange={handleCheckboxChange}
            />
            I agree to proceed with initial charges of 300/-
          </div>

          <label>
            Preferred Date*:
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Preferred Time*:
            <input
              type="time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Comments:
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
            ></textarea>
          </label>
          <label>
            Upload Image 1:
            <input type="file" name="file1" onChange={handleFileChange} />
          </label>
          <label>
            Upload Image 2:
            <input type="file" name="file2" onChange={handleFileChange} />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BookNowForm;
