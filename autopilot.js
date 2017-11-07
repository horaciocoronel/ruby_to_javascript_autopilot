var getNewCar = {
  "city": "Toronto",
  "passengers": 0,
  "gas" : 100
}
var cars = []

function addCar(cars, getNewCar) {
  cars.push(getNewCar);
  console.log("Adding new car to fleet. Fleet size is now " + cars.length);
}

addCar(cars, getNewCar);
console.log(addCar);
