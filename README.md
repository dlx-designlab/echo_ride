How to run server:


cd ripple-backend
npm i
node server.js
How to run client:


update file ripple-client/src/ip.js to include the local ip
cd ripple-client
npm i
npm start

# Ripple App

An interactive app for voting while using public transportation.

## Table of Contents

- [Installation](#Installation)
- [Backend](#Backend)
- [Frontend](#Frontend)
- [Run The App](#Run The App)

## Installation

In order to run this app, you should install **Node** on your machine.
You should run the Front and Back ends to use the app.

And then clone the Repo:
```
git clone https://github.com/guybloo/ripple.git
```

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
When the App is running, you should change the IP in the file ```ripple/ripple-client/src/ip.js``` to your local machine IP.

If you're using Windows, just run ```ip.bat``` file.

## Run The App
Navigate to ```http://localhost:3000``` or ```http://YOUR-IP:3000``` in order to open the main screen.

To see the Bubbles result page, navigate to ```http://YOUR-IP:3000/bubblesResults```