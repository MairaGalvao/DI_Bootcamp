const getData = () => {
  let fn = document.getElementById('fname').value;
  let sn = document.getElementById('sname').value;
  fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fn}&sname=${sn}`, {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-key": "8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c",
  		"x-rapidapi-host": "love-calculator.p.rapidapi.com"
  	}
  })
  .then(response => {
  	return response.json();
  })
  .then(data => {
    showResults(data);
  })
  .catch(err => {
  	console.error(err);
  });
}
​
const showResults = ({fname,sname,percentage,result}) =>{
  const root = document.getElementById('root');
  root.innerHTML = '';
​
  let header = document.createElement('H1');
  header.innerText = fname + " & " + sname;
  root.appendChild(header)
​
  let perc = document.createElement('H2');
  perc.innerText = 'Match: ' + percentage + '% this is for Aviv';
  root.appendChild(perc)
​
  let res = document.createElement('H4');
  res.innerText = result;
  root.appendChild(res)
​
}