import React, { useState, useEffect } from "react";
import DesoApi from "../deso/desoAPI";

const Testing = (props) => {
  const [desoApi, setDesoApi] = useState(null);

  useEffect(() => {
    const deso = new DesoApi();
    setDesoApi(deso);
  }, []);

  const submitPost = async () => {
    console.log(props.publicKey)
    await desoApi.submitPost(props.publicKey, "Another test")
  }

  return (
    <div>
      <button onClick={() => submitPost()}>Submit Posts</button>
    </div>
  );
};
 
export default Testing;