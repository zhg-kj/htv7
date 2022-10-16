import axios from "axios"

const DEFAULT_NODE_URL = "https://node.deso.org/api"
let client = null

class DesoApi {
    constructor() {
        this.client = null
        this.baseUrl = DEFAULT_NODE_URL
    }

    // TRANSACTIONS
    // USERS

    // POSTS
    
    // file: File
    // publicKey: String
    // jwt: String
    // response: { imageURL: String }
    async uploadImage (file, publicKey, jwt) {

        const formData = new FormData();
        formData.append("file", file);
        formData.append("UserPublicKeyBase58Check", publicKey);
        formData.append("JWT", jwt);

        const path = "/v0/upload-image"

        try{
            const result = await this.getFormClient().post(path, formData)
            return result.data
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async submitPost  (publicKey, body) {
        if(!publicKey){
            console.log("publicKey is required")
            return
        }

        if(!body){
            console.log("body is required")
            return
        }

        const path = "/v0/submit-post"
        const data = {
            UpdaterPublicKeyBase58Check: publicKey,
            BodyObj: {Body: body, ImageURLs: [], VideoURLs: []},
            MinFeeRateNanosPerKB: 1000,
        }

        try{
            const result = await this.getClient().post(path, data)
            return result.data
        } catch (error) {
            console.log(error)
            return null
        }
        
    }

  async submitTransaction(signedTransactionHex) {
      if(!signedTransactionHex){
          console.log("signedTransactionHex is required")
          return
      }

      const path = "/v0/submit-transaction"
      const data = {
          TransactionHex : signedTransactionHex
      }
      try{
          const result = await this.getClient().post(path, data)
          return result.data
      } catch (error) {
          console.log(error)
          return null
      }
  }
    
    // GET
    async getPostsForPublicKey(publicKey) {
        if(!publicKey) {
            console.log("public key is required")
            return
        }

        const path = "/v0/get-posts-for-public-key"
        const data = {
            PublicKeyBase58Check : publicKey,
            Username : "",
            ReaderPublicKeyBase58Check : "",
            NumToFetch : 1,
            MediaRequired : false
        }
        try{
            const result = await this.getClient().post(path, data)
            return result?.data
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async getSingleProfile(publicKey, username) {
        if(!publicKey && !username){
            console.log("publicKey or username is required")
            return
        }

        const path = "/v0/get-single-profile"
        const data = {
            PublicKeyBase58Check : publicKey,
            Username : username
        }
        
        try{
            const result = await this.getClient().post(path, data)
            return result?.data
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async getIsHodler(publicKey, creatorKey) {
        const path = "/v0/is-hodling-public-key"

        const data = {
            PublicKeyBase58Check : publicKey,
            IsHodlingPublicKeyBase58Check : creatorKey
        }

        try{
            const result = await this.getClient().post(path, data)
            return result?.data
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async getIsFollowing(publicKey, creatorKey) {
        const path = "/v0/is-following-public-key"

        const data = {
            PublicKeyBase58Check : publicKey,
            IsFollowingPublicKeyBase58Check : creatorKey
        }

        try{
            const result = await this.getClient().post(path, data)
            return result?.data
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async getSinglePost(postHash, commentLimit = 20, fetchParents = false, commentOffset= 0, addGlobalFeedBool = false) {
        if(!postHash){
            console.log("postHash is required")
            return
        }

        const path = "/v0/get-single-post"
        const data = {
            PostHashHex :postHash,
            ReaderPublicKeyBase58Check:"",
            FetchParents:fetchParents,
            CommentOffset:commentOffset,
            CommentLimit:commentLimit,
            AddGlobalFeedBool:addGlobalFeedBool
        }
        try{
            const result = await this.getClient().post(path, data)
            return result?.data
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async getUsersStateless(publicKeyList, skipForLeaderboard) {
        if(!publicKeyList){
            console.log("publicKeyList is required")
            return
        }

        const path = "/v0/get-users-stateless"
        const data = {
            PublicKeysBase58Check : publicKeyList,
            SkipForLeaderboard : skipForLeaderboard
        }
        try{
            const result = await this.getClient().post(path, data)
            return result?.data
        } catch (error) {
            console.log(error)
            return null
        }
        
    }

    async getProfilesPartialMatch(partialName){
        if(!partialName){
            console.log("partialName is required")
            return
        }

        const path = "/v0/get-profiles"
        const data = {
            ReaderPublicKeyBase58Check : "",
            UsernamePrefix : partialName
        }
        try{
            const result = await this.getClient().post(path, data)
            return result?.data
        } catch (error) {
            console.log(error)
            return null
        }
        
    }

    getClient (){
        if (client) return client
        client = axios.create({
            baseURL: this.baseUrl,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
          })
          return client
    }

    getFormClient (){
        if (client) return client
        client = axios.create({
            baseURL: this.baseUrl,
            headers: {
              "Content-Type": "multipart/form-data",
              Accept: "multipart/form-data"
            },
          })
          return client
    }

}

export default DesoApi