let driverId = 0;
let tripId = 0;
let passengerId = 0;

const store = { drivers: [], passengers: [], trips: [] };

class Driver {
  constructor (name) {
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }

  trips () {
    return store.trips.filter(
      function (trip) {
        return trip.driverId == this.id;
      }.bind(this)
    );
  }

  passengers() {
    const passengerIdsFromTrips = this.trips().reduce(
      function (agg, trip) {
        return [...agg, trip.passengerId];
      }
    ,[]);
    return store.passengers.filter(
      function (passenger) {
        return passengerIdsFromTrips.includes(passenger.id);
      }
    );
  }
}

class Passenger {
  constructor (name) {
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }

  trips () {
    return store.trips.filter(
      function (trip) {
        return trip.passengerId === this.id;
      }.bind(this)
    );
  }

  drivers () {
    const driverIdsFromTrips = this.trips().reduce(
      function (agg, trip) {
        return [...agg, trip]
      }
    , []);
    return store.drivers.filter(
      function (driver) {
        return driverIdsFromTrips.includes(driver.id);
      }
    );

  }

}

class Trip {
  constructor (driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++tripId;
    store.trips.push(this);
  }

  driver () {
    return store.drivers.find(
      function (driver) {
        driver.id === this.driverId;
      }.bind(this)
    );
  }

  passenger () {
    return this.passenger;
  }

}
