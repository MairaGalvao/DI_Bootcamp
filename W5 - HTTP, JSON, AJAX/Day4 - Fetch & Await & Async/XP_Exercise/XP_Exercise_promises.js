const compareToTen = (num) => {
    return new Promise( (resolve,reject) => {
      if(num > 10){
        resolve('bal bla bla')
      }
      else{
        reject('ha ha ha')
      }
    })
    // return p;
  }
  // let myPromise = compareToTen(70);
  compareToTen(7)
  .then(data => {
    console.log('this is the resolve',data);
  })
  .catch(err => {
    console.log('this is the error',err);
  })