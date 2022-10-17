# Hack Thte Valley 7 PROJECT: PrivateBit

privatebit.world

## Inspiration
Patreon!

## What it does
We empower creators to directly upload their content to the blockchain and then sell their personal "creator coins" to their audiences. The more creator coins a fan owns, the more content from their creator they are able to see. The purpose of our application in the modern world is to create a place of equality where everyone is able to express their own personal beliefs on social media. Through blockchain, there will be no censorship or restrictions on users posts, while increasing security and allowing users to monetize their posts.

## How we built it
We leveraged the DeSo API to handle posting to the blockchain, fetching data, and authentication. We constructed our frontend with the ReactJS framework and served a Node.js/Express server that communicated to a MongoDB backend for data storage that the DeSo API couldn't handle. We used CSS to style all of our components and pages written with React framework, to make them all tie together to a visual theme. After completing the prototype we hosted it on a server with a custom domain name.

## Challenges we ran into
We ran into some difficulty using the DeSo API some documentation were still under construction. Due to the complexity of the API, it also requires fundamental knowledge about blockchain such as transactions and validation, so we struggled a little bit to get it running. We spent a lot of time making API calls without any crypto in our wallets, not realizing that some of the calls required gas fees.

## Accomplishments that we're proud of
We were able to come up with a creative idea and getting the DeSo API up and running to deploy a working prototype of our project. We are also extremely proud of our UI, as it really does give the feel of a real social media platform.

## What we learned
How to read and use large scale API documentation.

## Demo

### Video
https://user-images.githubusercontent.com/17074619/196231314-e539dec3-f00a-42a4-9ba1-dc808c88c63e.mp4

### Images
![pic1](https://user-images.githubusercontent.com/17074619/196231850-e5a2219e-fd76-4f37-8a2f-79159851af6b.jpeg)
![pic2](https://user-images.githubusercontent.com/17074619/196231859-858097f9-6f91-4e0c-9bc7-e5ed8e32732a.jpeg)
![pic3](https://user-images.githubusercontent.com/17074619/196231879-a9282d5b-422f-46e4-a5f7-0b07089e3d81.jpeg)
![pic4](https://user-images.githubusercontent.com/17074619/196231884-9bc315f6-a1d3-40d5-9f62-f9785fb9fd2c.jpeg)
![pic5](https://user-images.githubusercontent.com/17074619/196231893-1b350bf2-c969-47cc-a90a-6d1af58b6570.jpeg)


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

