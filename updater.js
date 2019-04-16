const updateInterval = 2000;

function startUpdatingView(){setInterval(() => {updateView()}, updateInterval)}

function updateView(){
  removeOldData()
  updateTripsPerDayView()
  updateAvgVehiclesView()
  updateDropWithoutLocationView()
  updateMinuetsView()
  updateMadisonTripsView()
}

function removeOldData(){
  let tableData = querySelectorHas("tr", "td")
  // clear old data
  for (let i=0; i<tableData.length; i++){
    tableData[i].remove()
  }
}

function updateTripsPerDayView(){
  let tableBody = document.querySelector("#tripPerDay");
  for (var record in tripsPerDay){
    let row = tableBody.insertRow(-1);
    row.insertCell(0).innerHTML = record;
    row.insertCell(1).innerHTML = tripsPerDay[record];
  }
}

function updateAvgVehiclesView(){
  let tableBody = document.querySelector("#avgVehiclePerDay");
  for (var record in avgVehiclePerDay){
    let row = tableBody.insertRow(-1);
    row.insertCell(0).innerHTML = record;
    row.insertCell(1).innerHTML = avgVehiclePerDay[record].length;
  }
}

function updateDropWithoutLocationView(){
  let tableBody = document.querySelector("#dropoffLocation");
    let row = tableBody.insertRow(-1);
    row.insertCell(0).innerHTML = dropWithoutLocation["yellow"];
    row.insertCell(1).innerHTML = dropWithoutLocation["green"];
    row.insertCell(2).innerHTML = dropWithoutLocation["fhv"];
}

function updateMinuetsView(){
  let tableBody = document.querySelector("#minuetsPerTrip");
  let row = tableBody.insertRow(-1);
  row.insertCell(0).innerHTML = (minuetsPerTrip["yellow"]).toFixed(2);
  row.insertCell(1).innerHTML = (minuetsPerTrip["green"]).toFixed(2);
  row.insertCell(2).innerHTML = (minuetsPerTrip["fhv"]).toFixed(2);
}

function updateMadisonTripsView(){
  let tableBody = document.querySelector("#madisonTrips");
  for (var record in madisonTrips){
    let row = tableBody.insertRow(-1);
    row.insertCell(0).innerHTML = record;
    row.insertCell(1).innerHTML = madisonTrips[record]["yellow"];
    row.insertCell(2).innerHTML = madisonTrips[record]["green"];
    row.insertCell(3).innerHTML = madisonTrips[record]["fhv"];
  }
}

// HELPER FUNCTIONS
function querySelectorHas (parent, child){
   return [].filter.call( document.querySelectorAll( parent ), function( elem ){
       return elem.querySelector( child )
   });
}
