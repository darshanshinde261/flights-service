const CrudRepository = require('./crud-repository')
const { flight } = require("../models")

class cityRepository extends CrudRepository {
    constructor(){
        super(flight);
    }
}

module.exports = cityRepository