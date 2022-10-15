import React, { useState, useEffect } from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Login from "./Login";
import Testing from "./pages/apiTestingPage";

// Misc
import localStorageTTL from "./components/localStorageTTL";
const IdentityUsersKey = "identityUsersV2"

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [publicKey, setPublicKey] = useState(null);

  useEffect(() => {
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
    return (<Login publicKey={publicKey} setLoggedIn={setLoggedIn} setPublicKey={setPublicKey}/>);
  }
  else {
    return (
      <div>
        <Navbar />
        <iframe
          title="desoidentity"
          id="identity"
          frameBorder="0"
          src="https://identity.deso.org/embed?v=2"
          style={{height: "100vh", width: "100vw", display: "none", position: "fixed",  zIndex: 1000, left: 0, top: 0}}
        ></iframe>
      <Routes>
        <Route exact path="/" element={<RecordList publicKey={publicKey} setPublicKey={setPublicKey} setLoggedIn={setLoggedIn}/>} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
}
 
export default App;