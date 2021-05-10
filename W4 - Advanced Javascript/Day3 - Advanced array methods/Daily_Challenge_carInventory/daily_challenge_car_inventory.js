//Exercise 1
let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

let firstHonda = inventory.find(item => item.car_make == 'Honda' )
//found my first item with Honda

let my_car_make = firstHonda.car_make //getting the item inside of each element in the object
let my_car_model = firstHonda.car_model
let my_car_year = firstHonda.car_year
console.log(`This is a ${my_car_make} ${my_car_model} from ${my_car_year}`)

//Exercise 2 


let sortCarInventoryByYear = (carInventory) => {
    let sortedYear = carInventory.sort((x, y)=> x['car_year'] -y ['car_year'])
    return sortedYear
}

console.log(sortCarInventoryByYear(inventory))