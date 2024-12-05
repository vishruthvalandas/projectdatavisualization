import { useState, useMemo } from "react";
import Topbar from "./Topbar/Topbar";
import PieChart from "./Piechart/Piechart";

import { CategoryScale, Tooltip, Legend } from "chart.js/auto";
import Chart from "chart.js/auto";

import DataView from "./DataViews/DataView";
import Scatterplot from "./ScatterPlot/Scatterplot";
import { calculateNullValues } from "./Transvere";
import Radar1 from "./Radar/Radar1";
import Color from "color";
import Polarchart from "./polar/Polarchart";
import LineChart1 from "./Linechart/LineChart1";
import { useSelector } from "react-redux";
import BarChart from "./Bar/BarChart";
import BoxPlot from './BoxPlot'
import Heatmap from "./Heatmap";

Chart.register(Tooltip, Legend, CategoryScale);
function Total() {
  const [selectedOption, setSelectedOption] = useState("Outdoor Temperature");
  const handleSelect = (event) => {
    setSelectedOption(event.target.textContent.toString());
  };
  const nullValues = calculateNullValues();
  console.log(nullValues['Year1'])
  const clickedIndex = useSelector((state) => state.chart.clickedIndex);

  return (
    <div>
      <div class="row w-100 text-center" style={{ width: "100vh" }}>
        <div class="col" style={{ marginLeft: "50px" }}>
          <div class="w-100">
            <Topbar />
          </div>
          <div
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div class="container">
              <div style={{ marginBottom: "10px" }}>
                <DataView NullValues={nullValues["nullCounts"]} />
              </div>

              <div class="row" style={{ marginBottom: "20px" }}>
                <div class="col">
                  <div
                    class="card"
                    style={{
                      backgroundColor: Color("#C9E6F0"),
                    }}
                  >
                    <div class="card-body">
                      <ul style={{ listStyle: "None" }}>
                        <li class="nav-item" style={{ marginLeft: "10px" }}>
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
                                <button
                                  className="dropdown-item"
                                  onClick={handleSelect}
                                >
                                  Outdoor Temperature
                                </button>
                              </li>
                              <li>
                                <button
                                  className="dropdown-item"
                                  onClick={handleSelect}
                                >
                                  PM2.5 - Local Conditions
                                </button>
                              </li>
                              <li>
                                <button
                                  className="dropdown-item"
                                  onClick={handleSelect}
                                >
                                  Relative Humidity
                                </button>
                              </li>
                              <li>
                                <button
                                  className="dropdown-item"
                                  onClick={handleSelect}
                                >
                                  Wind Direction - Resultant
                                </button>
                              </li>
                              <li>
                                <button
                                  className="dropdown-item"
                                  onClick={handleSelect}
                                >
                                  Wind Speed - Resultant
                                </button>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" style={{ marginBottom: "20px" }}>
                <div class="col-sm-6">
                  <div
                    class="card"
                    style={{
                      backgroundColor: Color("#C9E6F0"),
                      height: "350px",
                    }}
                  >
                    <div class="card-body">
                      <LineChart1
                        SelectedValue={selectedOption}
                        label={Object.keys(nullValues["Time1"])}
                        data={Object.values(nullValues["Time1"])}
                      />
                    </div>
                    <div class="card" style={{
                        backgroundColor: Color("#C9E6F0"),
                        marginTop:"30px"

                      }}>
                    <div
                      class="card-body"
        
                    >
                      <Scatterplot data={Object.values(nullValues["Time1"])} />
                    </div>
                  </div>
                  </div>

                  {/* <div class="card" style={{ marginTop: "40px",backgroundColor: Color("#cccccc").alpha(0.2).string(),
                        height: "350px",}}>
                    <div
                      class="card-body"
                      
                    >
                      <Radar1 labels={label1} data1={data1} />
                    </div>
                  </div> */}
                </div>
                
                <div class="col-sm-6">
                  <div
                    class="card"
                    style={{
                      backgroundColor: Color("#C9E6F0"),
                      height: "750px",
                    }}
                
                  >
                    <div class="card-body">
                      <PieChart
                        SelectedValue={selectedOption}
                        label={Object.keys(nullValues["Time1"])}
                        data={Object.values(nullValues["Time1"])}

                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="row" style={{ marginBottom: "20px" }}>
                <div class="col-sm-6">
                  <div class="card" style={{
                        backgroundColor: Color("#C9E6F0"),
                        height:"390px"

                      }}>
                    <div
                      class="card-body"
        
                    >
                      <BarChart SelectedValue={selectedOption}
                        label={Object.keys(nullValues["Year"])}
                        data={Object.values(nullValues["Year"])}
                        data2={Object.values(nullValues['Year1'])}/>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="card" style={{
                        backgroundColor: Color("#C9E6F0"),
                        height: "390px",
                      }}>
                    <div
                      class="card-body"
                      
                    >
                      <Polarchart SelectedValue={selectedOption} label={Object.values(nullValues["Year"])}
                        />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" style={{ marginBottom: "20px" }}>
                <div class="col">
                  <div class="card" style={{
                        backgroundColor: Color("#C9E6F0"),

                      }}>
                    <div
                      class="card-body"
                      style={{display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"}}
        
                    >
                      <BoxPlot SelectedValue={selectedOption}/>
                    </div>
                  </div>
                </div>

                
              </div>
              <div class="row" style={{ marginBottom: "20px" }}>
                <div class="col">
                  <div class="card" style={{
                        backgroundColor: Color("#C9E6F0"),

                      }}>
                    <div
                      class="card-body"
                      style={{display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"}}
        
                    >
                      <Heatmap SelectedValue={selectedOption}/>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
            
  
          </div>
        </div>
        {/* <div class="col" style={{marginLeft:"200px"}}>
          <NewTotal/>
        </div> */}
      </div>
    </div>
  );
}
export default Total;
