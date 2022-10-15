import axios from "axios"
import DesoIdentity from "./desoIdentity"

const DEFAULT_NODE_URL = "https://node.deso.org/api"
let client = null

class DesoApi {
    constructor() {
        this.client = null
        this.baseUrl = DEFAULT_NODE_URL
    }

    // TRANSACTIONS
    // USERS
    async updateProfile(publicKey, username, description, pfp) {
      const path = "/v0/update-profile"
      const data = {
        UpdaterPublicKeyBase58Check: publicKey,
        NewUsername: username,
        NewDescription: description,
        NewProfilePic: pfp,
        NewCreatorBasisPoints: 1000,
        MinFeeRateNanosPerKB: 0,
      }

      try{
        const result = await this.getClient().post(path, data)
        return result?.data
      } catch (error) {
          console.log(error)
          return null
      }
    }

    async follow(followerKey, followedKey, unfollow) {
      const path = "/v0/update-profile"
      const data = {
        FollowerPublicKeyBase58Check: followerKey,
        FollowedPublicKeyBase58Check: followedKey,
        IsUnfollow: unfollow,
        MinFeeRateNanosPerKB: 0,
      }
    }

    // POSTS
    async submitPost(publicKey, body) {
      if(!publicKey){
          console.log("publicKey is required")
          return
      }

      if(!body){
          console.log("body is required")
          return
      }
      
      const di = new DesoIdentity();
      const path = "/v0/submit-post"
      const data = {
          UpdaterPublicKeyBase58Check: publicKey,
          PostHashHexToModify: "",
          ParentStakeID: "",
          Title: "",
          BodyObj: {Body: body, ImageURLs: []},
          RecloutedPostHashHex: "",
          Sub: "",
          IsHidden:  false,
          MinFeeRateNanosPerKB: 1000
        }

      try{
          const result = await this.getClient().post(path, data)
          console.log(result.data)
          const transactionHex = result.data.TransactionHex
          console.log(transactionHex)
          const signedTransactionHex = await di.signTxAsync(transactionHex)
          console.log(signedTransactionHex)
          const rtnSubmitTransaction = await this.submitTransaction(signedTransactionHex) 
          console.log(rtnSubmitTransaction)

          if(rtnSubmitTransaction) {
            console.log('Submitted Post')
          }
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
    async getPostsForPublicKey(username, last_post_hash_hex) {
        if(!username){
            console.log("username is required")
            return
        }

        const path = "/v0/get-posts-for-public-key"
        const data = {
            PublicKeyBase58Check : "",
            Username : username,
            ReaderPublicKeyBase58Check : "",
            LastPostHashHex : last_post_hash_hex,
            NumToFetch : 10,
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
              Accept: "application/json",
            },
          })
          return client
    }

}

export default DesoApi