//here, we lay the scared foundation of js. may it never move.

//@Author William Bukowski

fetch("http://localhost:8080/Server_Project1.main/Server").then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
}).catch(function() {
  console.log("Oh, no, it seems we have a broken promise..");
});
