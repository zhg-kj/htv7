import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Login from "./Login";
 
const App = () => {
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
       <Route exact path="/" element={<Login />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route path="/login" element={<Login />} />
     </Routes>
   </div>
 );
};
 
export default App;