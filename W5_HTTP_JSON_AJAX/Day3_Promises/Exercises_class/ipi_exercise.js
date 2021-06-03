let next = 0
function fetchData(){
    let search = document.getElementById('search').value
    let inputLimit = document.getElementById('inputLimit').value
    let xhr = new XMLHttpRequest()
    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${search}&limit=${inputLimit}&offset=${next}`)
    //q=hilarious& - add it before search to retrieve more gifs of hilarious
    xhr.responseType = 'json' // or I could do JSON.parse(xhr.response) - the same thing
    xhr.send()
    xhr.onload = function(){
    
    createImages(xhr.response.data)
        //     if (xhr.status != 200){
    //         console.log(`error ${xhr.status}: ${xhr.statusText}`)
    // }else{
    //     console.log(xhr.response)
        
    // }
}
    xhr.onerror = function(){
        alert ('Please try in few minutes, server is down')
    }
    next = next + Number(inputLimit)
}


function createImages (arr){
    let root = document.getElementById('root')
    root.innerHTML = ""
    arr.forEach((item, i) => {
    let img = document.createElement('img')
    img.setAttribute ('src', item.images.fixed_height.url)
    root.appendChild(img)    
    });
}

function deleteAll(){
    let root = document.getElementById('root')
    root.innerHTML = ""
    //to delete everything when clicked in the botoon
}

function nextButton(){
    fetchData()
       
};

