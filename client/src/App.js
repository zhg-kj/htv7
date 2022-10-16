import React, { useState, useEffect } from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar/navbar";
import Edit from "./components/edit";
import Create from "./components/create/create";
import Login from "./pages/login";
import Testing from "./pages/apiTestingPage";
import Creator from"./pages/creator";
import Profile from "./pages/profile";
import ViewContent from "./pages/viewContent";
import Home from "./components/Home/Home";
import RecordList from "./components/recordList";
import SearchPage from "./pages/SearchPage";

// Misc
import localStorageTTL from "./components/localStorageTTL";
import DesoIdentity from "./deso/desoIdentity";

const IdentityUsersKey = "identityUsersV2"

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [publicKey, setPublicKey] = useState(null);
  const [desoIdentity, setDesoIdentity] = useState(null);

  useEffect(() => {
    const deso = new DesoIdentity();
    setDesoIdentity(deso);
    
    let user = {}
    if (localStorageTTL.getWithExpiry(IdentityUsersKey) === 'undefined'){
      user = {}
    } else if (localStorageTTL.getWithExpiry(IdentityUsersKey)){
      user = JSON.parse(localStorageTTL.getWithExpiry(IdentityUsersKey) || '{}')
    }
  
    if(user.publicKey){
      setLoggedIn(true);
      setPublicKey(user.publicKey);
    }
  }, []);

  if (!loggedIn) {
    return (<Login publicKey={publicKey} setLoggedIn={setLoggedIn} setPublicKey={setPublicKey} desoIdentity={desoIdentity}/>);
  }
  else {
    return (
      <div>
        <iframe
          title="desoidentity"
          id="identity"
          frameBorder="0"
          src="https://identity.deso.org/embed?v=2"
          style={{height: "100vh", width: "100vw", display: "none", position: "fixed",  zIndex: 1000, left: 0, top: 0}}
        ></iframe>
        <Navbar publicKey={publicKey} setLoggedIn={setLoggedIn} setPublicKey={setPublicKey} desoIdentity={desoIdentity}/>
        <Routes>
            <Route exact path="/testing" element={<Testing publicKey={publicKey} desoIdentity={desoIdentity}/>} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/record" element={<RecordList publicKey={publicKey} setPublicKey={setPublicKey} setLoggedIn={setLoggedIn}/>} />
            <Route path="/content/:id" element={<ViewContent />} />
            <Route path="/creator" element={<Creator publicKey={publicKey} creatorPublicKey="BC1YLiFNARSWF6qtXM5acrS7q8VWPeeS2gycVBtqLALkE4c1V3kx4US"/>} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/create" element={<Create />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    );
 }
};
 
export default App;