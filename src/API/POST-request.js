const apiURL = "https://api.exmaple/com/data";


const data = {
  name: "Yarles",
  email: "yarles123@gmail.com",
};

const requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data)
}

fetch(apiURL, requestOptions) 
.then(response => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json()
})
.then(data => {
  console.log(data);
})
.catch(err => console.error(err))