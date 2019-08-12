let driverId = 0
let tripId = 0
let passenderId = 0

const store = [ drivers: [], passengers: [], trips: [] ]

class Driver {
  constructor (name) {
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }
  
}

class Passenger {

  
}

class Trip {
 
  
}