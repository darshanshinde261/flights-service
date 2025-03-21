function addRowLockOnFlights (flightId) {
    return `SELECT * from flights WHERE flights.id = ${flightId} FOR UPDATE;`
}

module.exports = {
    addRowLockOnFlights
}