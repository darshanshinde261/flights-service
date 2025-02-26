const CrudRepository = require('./crud-repository')
const {city} = require("../models")

class cityRepository extends CrudRepository {
    constructor(){
        super(city);
    }
}

module.exports = cityRepository