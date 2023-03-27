const Base = require('./base/base')

class Custumer extends Base{
    constructor({ id, name, carIds, age}){
        //passa com super por causa do extends
        super({ id, name })
        this.age = age
    }
}

module.exports = Custumer