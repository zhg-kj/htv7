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
    const data = await desoApi.getSingleProfile("BC1YLjRTtiFhTSgEXbKG7RzgiMxsNQCFytqR24rQzzhpb1adV4pUZN9")
    console.log(data)
    console.log(data["Profile"]["DESOBalanceNanos"] / 1000000000)
  }

  const checkUserHoldCreatorCoin = async (userPublicKey, creatorPublicKey) => {
   const result =  await desoApi.getIsHodler(userPublicKey, creatorPublicKey)

   console.log(result)
  }

  const getPostsForPublicKey = async () => {
    const data = await desoApi.getPostsForPublicKey(props.publicKey)
    console.log(data)
  }

  const getIsFollower = async (userPublicKey, creatorPublicKey) => {
    const data = await desoApi.getIsFollowing(userPublicKey, creatorPublicKey)
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
    <div className="App" style={{ height: "1000px", marginTop: "100px", display: "flex", flexDirection: "column"}}>
      <input type="file" onChange={handleChange}/>
      <button type="submit" onClick={handleSubmit}>Upload</button>
      <button onClick={(e) => getSingleProfile(props.publicKey)}>Get Profile</button>
  </div>
  );
};
 
export default Testing;