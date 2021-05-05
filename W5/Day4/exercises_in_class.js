// const compareToTen = (num) => {
//     return new Promise( (resolve,reject) => {
//       if(num > 10){
//         resolve('bal bla bla')
//       }
//       else{
//         reject('ha ha ha')
//       }
//     })
//     // return p;
//   }
//   // let myPromise = compareToTen(70);
//   compareToTen(7)
//   .then(data => {
//     console.log('this is the resolve',data);
//   })
//   .catch(err => {
//     console.log('this is the error',err);
//   })


// Exercise 2:
// Write two functions that use Promises that you can chain!
// The first function:
// makeAllCaps(), will take in an array of words
// and capitalize them,
// and then the second function, sortWords():
// will sort the words in alphabetical order.
// If the array contains anything but strings,
// it should throw an error.
// examples of array:
// const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
// const complicatedArray = ['cucumber', 44, true]


const makeAllCaps = (array) => {
    return new Promise((resolve,reject)=>{
      let capsArray = array.map(word => {
        if(typeof word === 'string'){
          return word.toUpperCase();
        }
        else {
          reject('Error: not all items in the array are strings!')
        }
      })
      resolve(capsArray);
    })
  }
  const sortWords = (array) => {
    return new Promise((resolve,reject)=>{
      if(array){
        resolve(array.sort())
      }
      else{
        reject('somethig went wrong')
      }
    })
  }
  // sortWords(['cucumber', 'tomatos', 'avocado'])
  // .then(sort=>{
  //   console.log(sort);
  // })
  // .catch(err=>{
  //   console.log(err);
  // })
  makeAllCaps(['cucumber', 'tomatos', 'avocado'])
  .then(data => {
    return sortWords(data)
  })
  .then(sort=>{
    console.log(sort);
  })
  .catch(err => {
    console.log('error',err);
  })