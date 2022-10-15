import React, { useState, useEffect } from "react";
import DesoApi from "../deso/desoAPI";

const Testing = (props) => {
  const [desoApi, setDesoApi] = useState(null);

  useEffect(() => {
    const deso = new DesoApi();
    setDesoApi(deso);
  }, []);

  const submitPost = () => {
    desoApi.submitPost(props.publicKey, {Body: "TEST", ImageURLs: []})
  }

  return (
    <div>
      <button onClick={() => submitPost()}>Submit Posts</button>
    </div>
  );
};
 
export default Testing;