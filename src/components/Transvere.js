import Data1 from "../csvjson.json";

export const calculateNullValues = () => {
  const TotalValues = {};

  TotalValues["nullCounts"] = {};
  TotalValues["Time"] = {};
  TotalValues["Year"] = {};
  TotalValues["Time1"] = {};
  TotalValues["Year1"] = {};
  Object.keys(Data1[0]).forEach((key) => {
    TotalValues["nullCounts"][key] = 0;
  });

  Data1.forEach((entry) => {
    const tempValue = parseFloat(entry["Outdoor Temperature"]);
    const PM2 = parseFloat(entry["PM2.5 - Local Conditions"]);
    const temp_humidity = parseFloat(entry["Relative Humidity"]);
    const winddirection = parseFloat(entry["Wind Direction - Resultant"]);
    const windspeed = parseFloat(entry["Wind Speed - Resultant"]);

    // if (!TotalValues["Year"].hasOwnProperty(entry['Date'].split('-')[0])) {
    //   TotalValues["Year"][entry['Date'].split('-')[0]] = { "Relative Humidity": 0, Outdoor: 0 };
    // }
    // if (!isNaN(temp_humidity)) {
    //   TotalValues['Year'][entry['Date'].split('-')[0]]['Relative Humidity']+=temp_humidity
    // }
    // if(!isNaN(tempValue)){
    //   TotalValues['Year'][entry['Date'].split('-')[0]]['Outdoor']+=tempValue
    // }

    if (!TotalValues["Time1"].hasOwnProperty(entry["Time"])) {
      TotalValues["Time1"][Number(entry["Time"].split(":")[0])] = {
        "Outdoor Temperature": 0,
        "PM2.5 - Local Conditions": 0,
        "Relative Humidity": 0,
        "Wind Direction - Resultant": 0,
        "Wind Speed - Resultant": 0,
      };
    }
    if (!isNaN(tempValue)) {
      TotalValues["Time1"][Number(entry["Time"].split(":")[0])][
        "Outdoor Temperature"
      ] += tempValue;
    }
    if (!isNaN(PM2)) {
      TotalValues["Time1"][Number(entry["Time"].split(":")[0])]["PM2.5 - Local Conditions"] +=
      PM2;
    }
    if (!isNaN(temp_humidity)) {
      TotalValues["Time1"][Number(entry["Time"].split(":")[0])][
        "Relative Humidity"
      ] += temp_humidity;
    }
    if (!isNaN(winddirection)) {
      TotalValues["Time1"][Number(entry["Time"].split(":")[0])]["Wind Direction - Resultant"] +=
        winddirection;
    }
    if (!isNaN(windspeed)) {
      TotalValues["Time1"][Number(entry["Time"].split(":")[0])]["Wind Speed - Resultant"] +=
      windspeed;
    }

    if (!TotalValues["Year"].hasOwnProperty(entry['Date'].split('-')[0])) {
      TotalValues["Year"][entry['Date'].split('-')[0]] = {
        "Outdoor Temperature": 0,
        "PM2.5 - Local Conditions": 0,
        "Relative Humidity": 0,
        "Wind Direction - Resultant": 0,
        "Wind Speed - Resultant": 0,
      };
    }
    if (!isNaN(tempValue)) {
      TotalValues["Year"][Number(entry['Date'].split('-')[0])][
        "Outdoor Temperature"
      ] += tempValue;
    }
    if (!isNaN(PM2)) {
      TotalValues["Year"][Number(entry['Date'].split('-')[0])]["PM2.5 - Local Conditions"] +=
      PM2;
    }
    if (!isNaN(temp_humidity)) {
      TotalValues["Year"][Number(entry['Date'].split('-')[0])][
        "Relative Humidity"
      ] += temp_humidity;
    }
    if (!isNaN(winddirection)) {
      TotalValues["Year"][Number(entry['Date'].split('-')[0])]["Wind Direction - Resultant"] +=
        winddirection;
    }
    if (!isNaN(windspeed)) {
      TotalValues["Year"][Number(entry['Date'].split('-')[0])]["Wind Speed - Resultant"] +=
      windspeed;
    }



    

    if (!TotalValues["Year1"].hasOwnProperty(Number(entry['Date'].split('-')[0]))) {
      TotalValues["Year1"][Number(entry['Date'].split('-')[0])]={};
    }

    if (!TotalValues["Year1"][Number(entry['Date'].split('-')[0])].hasOwnProperty(Number(entry["Time"].split(":")[0]))) {
      TotalValues["Year1"][Number(entry['Date'].split('-')[0])][Number(entry["Time"].split(":")[0])] = {
        "Outdoor Temperature": 0,
        "PM2.5 - Local Conditions": 0,
        "Relative Humidity": 0,
        "Wind Direction - Resultant": 0,
        "Wind Speed - Resultant": 0,
      };
    }
    if (!isNaN(tempValue)) {
      TotalValues["Year1"][Number(entry['Date'].split('-')[0])][Number(entry["Time"].split(":")[0])][
        "Outdoor Temperature"
      ] += tempValue;
    }
    if (!isNaN(PM2)) {
      TotalValues["Year1"][Number(entry['Date'].split('-')[0])][Number(entry["Time"].split(":")[0])]["PM2.5 - Local Conditions"] +=
      PM2;
    }
    if (!isNaN(temp_humidity)) {
      TotalValues["Year1"][Number(entry['Date'].split('-')[0])][Number(entry["Time"].split(":")[0])][
        "Relative Humidity"
      ] += temp_humidity;
    }
    if (!isNaN(winddirection)) {
      TotalValues["Year1"][Number(entry['Date'].split('-')[0])][Number(entry["Time"].split(":")[0])]["Wind Direction - Resultant"] +=
        winddirection;
    }
    if (!isNaN(windspeed)) {
      TotalValues["Year1"][Number(entry['Date'].split('-')[0])][Number(entry["Time"].split(":")[0])]["Wind Speed - Resultant"] +=
      windspeed;
    }
    
    
    
    
    if (!isNaN(tempValue)) {
      if (TotalValues["Time"].hasOwnProperty(entry["Time"])) {
        TotalValues["Time"][entry["Time"]] += tempValue;
      } else {
        TotalValues["Time"][entry["Time"]] = tempValue;
      }
    } else {
      console.warn(
        `Invalid temperature value: ${entry["Outdoor Temperature"]}`
      );
    }

    Object.keys(entry).forEach((key) => {
      if (
        entry[key] === null ||
        entry[key] === "" ||
        entry[key] === undefined
      ) {
        TotalValues["nullCounts"][key] += 1;
      }
    });
  });
  return TotalValues;
};
