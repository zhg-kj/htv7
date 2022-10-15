# HTV7 PROJECT
## Setup
To clone the project run the code below in your desired project directory.
```
git clone https://github.com/zhg-kj/htv7.git
```
Open up the project in VS Code and open the terminal. Make sure that your file path is on the root (htv7) folder. Then run
```
#install client dependencies
cd client
npm install
```
In a new terminal run
```
#install server dependencies
cd server
npm install
```
Now, inside the server folder, create a new file named config.env. Copy and paste this into the folder. Refer to our WX conversation for the PASSWORD.
```
ATLAS_URI=mongodb+srv://htv7:PASSWORD@cluster0.6ofuoit.mongodb.net/test
PORT=5000
```
## Launch app
To start the server run
```
cd server
node server.js
```
To start the client run
```
cd client
npm start
```

