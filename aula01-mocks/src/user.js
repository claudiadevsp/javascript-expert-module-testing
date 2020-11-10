class User {
    constructor({ age, id, name, profession }) {
        this.age = parseInt(age)
        this.id = parseInt(id)
        this.name = name
        this.profession = profession
    }
}
module.exports = User