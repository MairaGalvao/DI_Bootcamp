const getData=()=>{
    const item = document.getElementById('item').value;
    const amount = document.getElementById('amount').value;
    fetch(`http://localhost:4550/addItems?item=${item}&aomunt=${amount}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        appendItem(data)
    })
    .catch(err => {
        console.log(err);
    })


}

let root = document.getElementById('root');

function appendItem (data) {

    data.itemArr.forEach(item =>{
    let div = document.createElement('div');
    div.innerText = item.item + item.amount;
    root.appendChild(div);

   })

  }




