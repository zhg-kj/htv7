import React, { useState, useEffect } from "react";
import DesoApi from "../deso/desoAPI";

import ImageGallery from "../components/imageGallery";

const Testing = (props) => {
  const [desoApi, setDesoApi] = useState(null);
  const [file, setFile] = useState()

  useEffect(() => {

    const deso = new DesoApi();
    setDesoApi(deso);

  }, []);

  const submitPost = async () => {
    const body = 'Fuck Web 3'

    const rtnSubmitPost = await desoApi.submitPost(props.publicKey,  body)
    const transactionHex = rtnSubmitPost.TransactionHex
    const signedTransactionHex = await props.desoIdentity.signTxAsync(transactionHex)
    const result = await desoApi.submitTransaction(signedTransactionHex) 
  }

  const getSingleProfile = async () => {
    const data = await desoApi.getSingleProfile(props.publicKey)
    console.log(data)
  }

  const getPostsForPublicKey = async () => {
    const data = await desoApi.getPostsForPublicKey(props.publicKey)
    console.log(data)
  }

  const getJWT = async () => {
    const jwt = await props.desoIdentity.jwtAsync();
  }

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  async function handleSubmit(e) {
    const jwt = await props.desoIdentity.jwtAsync();
    const jwtToken = jwt
    const result = await desoApi.uploadImage(file, props.publicKey, jwtToken);
    alert(result)
  }

  return (
    <div className="App">
      <input type="file" onChange={handleChange}/>
      <button type="submit" onClick={handleSubmit}>Upload</button>
  </div>
  );
};
 
export default Testing;