let driverId = 0;
let tripId = 0;
let passenderId = 0;

const store = [ drivers: [], passengers: [], trips: [] ];

class Driver {
  constructor (name) {
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }

  trips () {
    return store.trips.filter(function (trip) {
      return trip.driverId == this.id;
    }.bind(this));
  }

  passengers() {
    return trips.reduce(function (agg, el) {
      return agg.push(el.passengerId);
    }, 0);
  }

}

class Passenger {
  constructor (name) {
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }

}

class Trip {
  constructor (driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

}
