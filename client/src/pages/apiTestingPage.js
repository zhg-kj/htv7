import React, { useState, useEffect } from "react";
import DesoApi from "../deso/desoAPI";

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

  return (
    <div>

      <button onClick={submitPost}>Submit Posts</button>
    </div>
  );
};
 
export default Testing;