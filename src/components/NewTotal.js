import { useState } from "react";
import LineChart1 from "./Linechart/LineChart1";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import data1 from "../csvjson.json";
function NewTotal() {
  const [selectedOption, setSelectedOption] = useState("Outdoor Temperature");
  const [selectedDate, setSelectedDate] = useState(new Date("2020-01-02"));

  const handleSelect = (event) => {
    setSelectedOption(event.target.textContent.toString());
  };

  const convertToDate = (dateString) => {
    return new Date(dateString); // Convert date string to Date object
  };

  const minDate = convertToDate("2020-01-01"); // Assuming the first date in the array
  const maxDate = convertToDate(data1[data1.length - 1]["Date"]); // Assuming the last date in the array

  return (
    <div>
      <div>
        <div>
          <header >
            <ul class="nav nav-pills">
              <li >
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  className="form-control"
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Choose a date"
                  minDate={minDate} // Set minDate as Date object
                  maxDate={maxDate} // Set maxDate as Date object
                />
              </li>

              <li class="nav-item" style={{marginLeft:"10px"}}>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {selectedOption}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <button className="dropdown-item" onClick={handleSelect}>
                        Outdoor Temperature
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={handleSelect}>
                        PM2.5 - Local Conditions
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={handleSelect}>
                        Relative Humidity
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={handleSelect}>
                        Wind Direction - Resultant
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={handleSelect}>
                        Wind Speed - Resultant
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </header>
        </div>
      </div>

    <div style={{width:"700px",heigth:"700px"}}><LineChart1
        SelectedValue={selectedOption}
        Another="Time"
        selectedDate={selectedDate}
      /></div>
      
    </div>
  );
}
export default NewTotal;
