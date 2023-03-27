const Base = require('./base/base')
class Car extends Base{
    constructor({ id, name, carIds, price}){
        //passa com super por causa do extends
        super({ id, name })
        this.carIds = carIds,
        this.price = price
    }
}

module.exports = Car