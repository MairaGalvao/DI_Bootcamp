function getData(){
    const data = null;
    let countryName = document.getElementById('country').value;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.responseType = 'json';
    xhr.open("GET", `https://covid-19-data.p.rapidapi.com/report/country/name?name=${countryName}&date=2020-04-01`);
    xhr.setRequestHeader("x-rapidapi-key", "8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c");
    xhr.setRequestHeader("x-rapidapi-host", "covid-19-data.p.rapidapi.com");
    xhr.send(data);
    xhr.onload = function() {
      showData(xhr.response);
    }
    xhr.onerror = function() {
      alert("Please try in few minutes, server is down");
    };
  }
  function showData(arr){
    console.log(arr);
    let root = document.getElementById('root');
    let name = document.createElement('h1');
    name.innerText = arr[0].country;
    root.appendChild(name)
    let confirmed = document.createElement('p');
    confirmed.innerText = `confirmed: ${arr[0].provinces[0].confirmed}`
    root.appendChild(confirmed)
  }