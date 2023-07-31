//first, require the dotenv package's config module

require('dotenv').config();

//look at all the processes

console.log(process.env)

//put the secret key in a variable
const apiKey = process.env.SECRET_API_KEY;

console.log(apiKey)

/**
 * sign up for API key
 * in this file
 * fetch the data 
 * .map through the array of returned objects and format them in some kind of html
 * display them on the html page
 */

const getPosts = () => {
    fetch(`http://jsonplaceholder.typicode.com/${api_key}`)
    .then(res => {
      if(!res.ok) {
        throw Error(res.statusText)
      } return res.json()
    })
    .then(posts => arrayOfPosts = posts)
    .catch(err => console.log(`Error,  ${err}`))
  }
