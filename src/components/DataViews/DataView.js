
import Data1 from "../../csvjson.json";
import "@fortawesome/fontawesome-free/css/all.min.css";
import * as React from "react";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/joy/CircularProgress";
import Color from "color";
import NewTotal from "../NewTotal";
import PieChart1 from '../PieforData/PieForData'
import Barchart1 from '../PieforData/BarForData'

import "../../card.css";

const icon = {
  Date: <i class="fas fa-calendar-alt fa-3x" style={{color:"white"}}></i>,
  Time: <i class="fas fa-hourglass-start fa-3x" style={{color:"white"}}></i>,
  "Outdoor Temperature": <i class="fas fa-thermometer fa-x" style={{color:"white"}}></i>,
  "PM2.5 - Local Conditions": <i class="fa-solid fa-smog fa-3x" style={{color:"white"}}></i>,
  "Relative Humidity": <i class="fa-solid fa-droplet fa-3x" style={{color:"white"}}></i>,
  "Wind Direction - Resultant": <i class="fas fa-wind fa-3x" style={{color:"white"}}></i>,
  "Wind Speed - Resultant": <i class="fas fa-wind fa-3x" style={{color:"white"}}></i>,
};

function DataView(props) {
  const length = Object.keys(Data1[0]).length;
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div
            class="card"
            style={{ backgroundColor: Color("#C9E6F0")}}
          >
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <div class="col-sm-12">
                    <div
                      class="card"
                      style={{
                        backgroundColor: Color("#C9E6F0"),
                        marginBottom:"30px"
                      }}
                    >
                      <div class="card-body">
                        <p class="card-text">
                          <div class="col">
                          
                            <Barchart1 length={Data1.length}/>
                            <h1>{Data1.length}</h1>
                            <h5>Data Length</h5>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="col-sm-12">
                  <div
                    class="card"
                    style={{
                      backgroundColor: Color("#C9E6F0"),
                    }}
                  >
                    <div class="card-body">
                      <p class="card-text">
                        <div class="col">
                          <Barchart1 length={length}/>
                          <h1>{length}</h1>
                          <h5>Number of columns</h5>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div class="col-sm-8">
          <div
            class="card"
            style={{ backgroundColor: Color("#C9E6F0") }}
          >
            <div class="card-body">
              <div class="row">
                {Object.entries(props.NullValues).map(([key, count]) => (
                  (count!=0)?
                  <div class="col-sm-4" style={{marginBottom:"20px"}}>
                    <div
                      class="card"
                      style={{
                        backgroundColor: Color("#B7B7B7").alpha(0.1).string(),
                      }}
                    >
                      <div class="card-body">
                        <p class="card-text">
                          <div class="col">
                            <div
                              class="card-body"
                              style={{ textAlign: "center" }}
                            >
                              <div style={{height:"200px",width:"200px"}}>
                              <Barchart1 length={count} />
                              </div>
                              
                              <PieChart1 length={Data1.length} count={count}/>
                              
                              <h5>{key}</h5>
                              <h5>{count} </h5>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                :""))}
                <h1>Null Values</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      
    </div>
  );
}
export default DataView;
