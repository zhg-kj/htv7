import React, { useState, useEffect } from "react";
import DesoApi from "../deso/desoAPI";

import ImageGallery from "../components/imageGallery";

const Testing = (props) => {
  const [desoApi, setDesoApi] = useState(null);

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

  return (
    <div>
      <button onClick={submitPost}>Submit Posts</button>
      <button onClick={() => getSingleProfile()}>Get Profile</button>
      <button onClick={() => getPostsForPublicKey()}>Get Post</button>
      <ImageGallery />
    </div>
  );
};
 
export default Testing;