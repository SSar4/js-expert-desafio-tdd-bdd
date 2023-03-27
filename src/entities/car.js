const Base = require('./base/base')
class Car extends Base{
    constructor({ id, name, releaseYear, available, gasAvailabel }) {
        //passa com super por causa do extends
        super({ id, name })
        this.releaseYear = releaseYear,
        this.available = available,
        this.gasAvailabel = gasAvailabel
    }
}

module.exports = Car