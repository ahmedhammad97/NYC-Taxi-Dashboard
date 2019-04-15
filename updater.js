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

}

function updateDropWithoutLocationView(){

}

function updateMinuetsView(){

}

function updateMadisonTripsView(){

}

// HELPER FUNCTIONS
function querySelectorHas (parent, child){
   return [].filter.call( document.querySelectorAll( parent ), function( elem ){
       return elem.querySelector( child )
   });
}
