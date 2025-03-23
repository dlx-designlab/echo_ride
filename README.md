# 🚌 🫧 Echo Ride App

An experimental interactive app for passenger reports while using public transportation.

## Table of Contents

- [Installation](#Installation)
- [Backend](#Backend)
- [Frontend](#Frontend)
- [Navigation](#Navigation)

## Installation

In order to run this app, you need: 
* Install **NodeJS v16** on your machine.
* Clone this repo: ```git clone https://github.com/dlx-designlab/echo_ride.git```
* Run the Front and Back ends
* Access the app from a browser

## Backend

Execute the following steps in order to run the server from terminal. 
From the root folder:

```bash
# Navigate to the project directory
cd ripple-backend

# Install dependencies
npm install

# Run server 
node server.js
```

## Frontend

Execute the following steps in order to run the client from terminal.
From the root folder:
```bash
# Navigate to the project directory
cd ripple-client

# Install dependencies
npm install

# Run client 
npm start
```
⚠️ IMPORTANT NOTES: 
1. Update the IP in this file ```../ripple-client/src/ip.js``` to your local machine IP.
   If you're using Windows, you can just run the ```ip.bat``` file.
2. When running on Github Codespaces you need to update ```../ripple-client/src/Types/Consts.js``` as described in the comments in file
3. It's recommneded to use Node v16 to avoid errors when running the client: ```nvm use 16```

## Navigation
Navigate to ```http://localhost:3000``` or ```http://YOUR-IP:3000``` in order to open the main screen.

To see the Bubbles result page, navigate to ```http://YOUR-IP:3000/bubblesResults```


## Old Comments...

How to run the server:
```
cd ripple-backend
npm i
node server.js
```

How to run the client:
update file `ripple-client/src/ip.js` to include the local ip
```
cd ripple-client
npm i
npm start
```
