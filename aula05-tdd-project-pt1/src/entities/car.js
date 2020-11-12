const Base = require('./base/base')
class Car extends Base {
   construct({ id, name, releaseYear, available, gasAvailable }) {
       this.super({ id, name })
       this.releaseYear = releaseYear
       this.available = available
       this.gasAvailable = gasAvailable
    }
}
module.exports = Car




