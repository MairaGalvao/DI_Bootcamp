// 1. what will be the output of the code above 

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


// I am John Doe from Vancouver, Canada. Latitude 49.2827, Longitude -123.1207

//2.
let myObject = {
    first: 'Elie',
    last:'Schoppik',
    displayStudentInfo: function(studentObject)
    {return 'Your full name is ' + myObject.first + ' ' + myObject.last}
}  
console.log(myObject.displayStudentInfo({first: 'Elie', last:'Schoppik'}));


//3.  

const users = {
    user1: 18273,
    user2: 92833,
    user3: 90315,
    myCalculation: function (){
    this.user1 = this.user1 * 2
    this.user2 = this.user2 * 2
    this.user3 = this.user3 * 2

    }
}
users.myCalculation()       
const myUsers = Object.entries(users)
myUsers.pop()
console.log(myUsers)

//4 Analyze the code below. What will be the output?
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);

  // an object

 


    
    



