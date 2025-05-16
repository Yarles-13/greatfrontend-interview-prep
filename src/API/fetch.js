import { isJSDocReturnTag } from "typescript";

const apiURL = "http://api.example.com/data";
//DEFINE URL or place it inside fetch ()


//GET REQUEST
fetch(apiURL)

.then(response => {
  //HANDLES ASYNC RESPONSE FROM SERVER 
  if (!reponse) {
    throw new Error("Not succesfull");
  }
  //RETUNR PARSED DATA
  return reponse.json();

})
.then(data => {
  console.log(data);
})
.catch((err) => {
  console.error(err, "There was an error fam");
})
