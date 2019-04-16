# NYC Taxi Dashboard

### Description
Live dashboard, which displays analytical data calculated from a feed of messages, received through a web socket.

### How it works
#### Phase I (Storing analytics to memory)
Every incoming record, is passed to a preprocessing function which cleans the data (removes leading quotes, fix difference in conventions .. etc.).
Ex. Field names are not consistent in all incoming records.

The record is then passed to a series of functions, each is concerned about calculating one of the dashboard's analytics.

It's then stored to a set of data structures residing in memory.

#### Phase II (Displaying analytics)
##### Dashboard figures
Every constant period of time (defined for now as 2 seconds), a series of functions are called, each of them does the job of reading the current analytics in the system, do any necessary additional calculations, and then replace the old displayed data with the updated one.

##### Log file
Every constant period of time (defined for now as 5 minuets), a file is generated, filled with some insights using the analytics running in the systems, and a function is invoked to start downloading the file to the client.

Note: the used browser must allow the page to do the download action (can be configured from the page settings).

### Technologies
The web app is only built using the basic web building blocks, with no additional libraries or frameworks. 

### How to run
The server sending the records can be first downloaded from [here.](https://drive.google.com/file/d/1Nr3BV1miyOqxyarkTe5f0i4vy3EGlsrL/view)

After running the server, a simple HTTP server must be used to host the app, probably the simplest way is by using Python command: `python -m SimpleHTTPServer 19001`, where 19001 is the port number.

Note: the server only allows connections to ports 9000 (which is reserved for itself) and 19001.

Then head from your browser to `http://localhost:19001`, the web app should be available there and running.

### Screenshots
![Screenshot1](https://github.com/ahmedhammad97/NYC-Taxi-Dashboard/blob/master/screenshots/early.gif)

![Screenshot2](https://github.com/ahmedhammad97/NYC-Taxi-Dashboard/blob/master/screenshots/late.gif)

### Resources
The server and datasets was provided by [Smartera3s](https://smartera3s.com).
