const Base = require('./base/base')
class Car extends Base {
   construct({ id, name, releaseYear, available, gasAvailable }) {
       this.releaseYear = releaseYear
       this.available = available
       this.gasAvailable = gasAvailable
       this.super({ id, name })
    }
}
module.exports = Car




