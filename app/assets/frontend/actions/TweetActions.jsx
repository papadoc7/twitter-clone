import API from "../API";

export default{
  getAllTweets() {
    API.getAllTweets(); //after sending the message to our API the tweetactions module doesn't care what happens next, it's not its responsibility 
  }
}