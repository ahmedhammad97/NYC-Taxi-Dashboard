/* VARIABLES */
var tripsPerDay = {};
var avgVehiclePerDay = {};
var dropWithoutLocation = { "yellow" : 0, "green" : 0, "fhv": 0 };
var minuetsPerTrip = { "yellow" : 0, "green" : 0, "fhv": 0 };
var madisonTrips = [];



$(() => { // when document is loaded and ready
  const ws = new WebSocket('ws://localhost:9000/ws');
  ws.onmessage = function(event) {
    var record = JSON.parse(event.data);
    handleIncommingData(record)
  };
});

function handleIncommingData(record){
  cleanData(record);
  updateTripsPerDay(record)
  updateAvgVehicles(record)
  updateDropWithoutLocation(record)
  updateMinuets(record)
  updateMadisonTrips(record)
}

function cleanData(record){
  for (var item in record){
    // remove leading and trailing comma's and quote marks
    record[item] = record[item].replace(/[“”"]/g, '').replace(/[‘’']/g,'');
  }
}

function updateTripsPerDay(record){
  let pickupDate = extractDate(record["pickupDateTime"]);
  // check if new date
  if (tripsPerDay[pickupDate] === undefined){
    // insert it
    tripsPerDay[pickupDate] = 1;

  }
  else{tripsPerDay[pickupDate]++;}
}

function updateAvgVehicles(record){
  // check if new vehicle
  if (tripsPerDay[record["vendorId"]] === undefined){
    // insert it
    tripsPerDay[record["vendorId"]] = 1;
  }
  else{tripsPerDay[record["vendorId"]]++;}
}

function updateDropWithoutLocation(record){
  if (record["dropOffLocationId"] === ""){
    dropWithoutLocation[record["tripType"]]++;
  }
}

function updateMinuets(record){
  // calculate trip time in minuits
  let startTime = new Date(record["pickupDateTime"]);
  let endTime = new Date(record["dropOffDatetime"]);
  let diffInMinuets = (endTime - startTime) / 60000;
  // update value
  minuetsPerTrip[record["tripType"]] += diffInMinuets;
}

function updateMadisonTrips(record){
  if (record["pickupLocationId"] === 149){
    let pickupDate = extractDate(record["pickupDateTime"]);
    // check if new date
    if (madisonTrips[pickupDate] === undefined){
      // insert it
      madisonTrips[pickupDate] = {"yellow":0, "green":0, "fhv":0}
    }
    madisonTrips[pickupDate][record["tripType"]]++;
}

// HELPER FUNCTIONS
function extractDate(fullDate){
  return fullDate.slice(0,10)
}
