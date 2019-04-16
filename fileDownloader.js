const downloadRate = 300000

function startDownloadingFile(){
  setInterval(() => {
    downloadFile()
  }, downloadRate)
}

function downloadFile(){
  let data = prepareDownloadData();
  let link = document.querySelector("#downloadLink")
  link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
  link.setAttribute('download', 'log.txt');
  link.click();
}

function prepareDownloadData(){
  let data = "Total trips : " + totalTrips + "\n\n";
  data += "I believe it's enough for totalTrips to show the case here, since it's just an mock task.\n"
  data += "Other metrics won't be much different in calculating."
  return data;
}
