var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "adc5f02acfmsha3cd71d94f1b43fp1bebf1jsncd36e7ddb757");
myHeaders.append("x-rapidapi-host", "v1.hockey.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v1.hockey.api-sports.io/{endpoint}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

